/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IStealthVault, IStealthVaultInterface } from "../IStealthVault";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_finalBond",
        type: "uint256",
      },
    ],
    name: "Bonded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_penalty",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_reportedBy",
        type: "address",
      },
    ],
    name: "PenaltyApplied",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_reportedBy",
        type: "address",
      },
    ],
    name: "ReportedHash",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_contract",
        type: "address",
      },
    ],
    name: "StealthContractDisabled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_contract",
        type: "address",
      },
    ],
    name: "StealthContractEnabled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "_contracts",
        type: "address[]",
      },
    ],
    name: "StealthContractsDisabled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "_contracts",
        type: "address[]",
      },
    ],
    name: "StealthContractsEnabled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_finalBond",
        type: "uint256",
      },
    ],
    name: "Unbonded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_penalty",
        type: "uint256",
      },
    ],
    name: "ValidatedHash",
    type: "event",
  },
  {
    inputs: [],
    name: "bond",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_caller",
        type: "address",
      },
    ],
    name: "bonded",
    outputs: [
      {
        internalType: "uint256",
        name: "_bond",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_caller",
        type: "address",
      },
    ],
    name: "caller",
    outputs: [
      {
        internalType: "bool",
        name: "_enabled",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_caller",
        type: "address",
      },
    ],
    name: "callerContracts",
    outputs: [
      {
        internalType: "address[]",
        name: "_contracts",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_caller",
        type: "address",
      },
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
    ],
    name: "callerStealthContract",
    outputs: [
      {
        internalType: "bool",
        name: "_enabled",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "callers",
    outputs: [
      {
        internalType: "address[]",
        name: "_callers",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_caller",
        type: "address",
      },
    ],
    name: "canUnbondAt",
    outputs: [
      {
        internalType: "uint256",
        name: "_canUnbondAt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cancelUnbond",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
    ],
    name: "disableStealthContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_contracts",
        type: "address[]",
      },
    ],
    name: "disableStealthContracts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
    ],
    name: "enableStealthContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_contracts",
        type: "address[]",
      },
    ],
    name: "enableStealthContracts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "gasBuffer",
    outputs: [
      {
        internalType: "uint256",
        name: "_gasBuffer",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
    ],
    name: "hashReportedBy",
    outputs: [
      {
        internalType: "address",
        name: "_reportedBy",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isStealthVault",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
    ],
    name: "reportHash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
    ],
    name: "reportHashAndPay",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_gasBuffer",
        type: "uint256",
      },
    ],
    name: "setGasBuffer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startUnbond",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalBonded",
    outputs: [
      {
        internalType: "uint256",
        name: "_totalBonded",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_caller",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transferBondToGovernor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_caller",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transferGovernorBond",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "unbond",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unbondAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_caller",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_penalty",
        type: "uint256",
      },
    ],
    name: "validateHash",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IStealthVault__factory {
  static readonly abi = _abi;
  static createInterface(): IStealthVaultInterface {
    return new utils.Interface(_abi) as IStealthVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IStealthVault {
    return new Contract(address, _abi, signerOrProvider) as IStealthVault;
  }
}
