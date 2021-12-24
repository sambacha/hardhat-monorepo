import { hexDataLength } from '@ethersproject/bytes';
import { pack } from '@ethersproject/solidity';
import { BigNumber, PopulatedTransaction } from 'ethers';

// h/t to https://github.com/gnosis/ethers-multisend

export enum OperationType {
  Call = 0,
  DelegateCall = 1,
}

export interface MetaTransaction {
  readonly to: string;
  readonly value: string;
  readonly data: string;
  readonly operation?: OperationType;
}

// TODO build transactions depending on token in & out or strategy (TBD)

/// Encodes the transaction as packed bytes of:
/// - `operation` as a `uint8` with `0` for a `call` or `1` for a `delegatecall` (=> 1 byte),
/// - `to` as an `address` (=> 20 bytes),
/// - `value` as a `uint256` (=> 32 bytes),
/// -  length of `data` as a `uint256` (=> 32 bytes),
/// - `data` as `bytes`.
const encodePacked = (tx: MetaTransaction) =>
  pack(
    ['uint8', 'address', 'uint256', 'uint256', 'bytes'],
    [tx.operation || OperationType.Call, tx.to, tx.value, hexDataLength(tx.data), tx.data]
  );

const remove0x = (hexString: string) => hexString.substr(2);

// Encodes a batch of module transactions into a single multiSend module transaction.
// A module transaction is an object with fields corresponding to a Gnosis Safe's (i.e., Zodiac IAvatar's) `execTransactionFromModule` method parameters.
// For more information refer to https://docs.gnosis.io/safe/docs/contracts_details/#gnosis-safe-transactions.
export const encodeMulti = (transactions: readonly MetaTransaction[], optimized: boolean = true): string => {
  if (optimized) return '0x' + transactions.map(encodePackedOptimizedCallNoValue).map(remove0x).join('');
  return '0x' + transactions.map(encodePacked).map(remove0x).join('');
};

export const mergeTransactions = (transactions: PopulatedTransaction[], optimized: boolean = true): string => {
  const parsedTxs = transactions.map((transaction) => ({
    to: transaction.to as string,
    value: BigNumber.from(transaction.value || 0).toString(),
    data: transaction.data as string,
    operation: OperationType.Call, // Only Call are allowed
  }));

  return encodeMulti(parsedTxs, optimized);
};

// Optimized

/// Encodes the transaction as packed bytes of:
/// - `to` as an `address` (=> 20 bytes),
/// -  length of `data` as a `uint256` (=> 32 bytes),
/// - `data` as `bytes`.
const encodePackedOptimizedCallNoValue = (tx: MetaTransaction) =>
  pack(['address', 'uint256', 'bytes'], [tx.to, hexDataLength(tx.data), tx.data]);
/// Encodes the transaction as packed bytes of:
/// - `to` as an `address` (=> 20 bytes),
/// - `value` as a `uint256` (=> 32 bytes),
/// -  length of `data` as a `uint256` (=> 32 bytes),
/// - `data` as `bytes`.
const encodePackedOptimizedCall = (tx: MetaTransaction) =>
  pack(['address', 'uint256', 'uint256', 'bytes'], [tx.to, tx.value, hexDataLength(tx.data), tx.data]);
