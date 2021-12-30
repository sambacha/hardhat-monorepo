/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IStealthTxInterface extends utils.Interface {
  functions: {
    "penalty()": FunctionFragment;
    "setPenalty(uint256)": FunctionFragment;
    "setStealthVault(address)": FunctionFragment;
    "stealthVault()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "penalty", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setPenalty",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setStealthVault",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "stealthVault",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "penalty", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setPenalty", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setStealthVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stealthVault",
    data: BytesLike
  ): Result;

  events: {
    "MigratedStealthVault(address)": EventFragment;
    "PenaltySet(uint256)": EventFragment;
    "StealthVaultSet(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "MigratedStealthVault"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PenaltySet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StealthVaultSet"): EventFragment;
}

export type MigratedStealthVaultEvent = TypedEvent<
  [string],
  { _migratedTo: string }
>;

export type MigratedStealthVaultEventFilter =
  TypedEventFilter<MigratedStealthVaultEvent>;

export type PenaltySetEvent = TypedEvent<[BigNumber], { _penalty: BigNumber }>;

export type PenaltySetEventFilter = TypedEventFilter<PenaltySetEvent>;

export type StealthVaultSetEvent = TypedEvent<
  [string],
  { _stealthVault: string }
>;

export type StealthVaultSetEventFilter = TypedEventFilter<StealthVaultSetEvent>;

export interface IStealthTx extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IStealthTxInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    penalty(overrides?: CallOverrides): Promise<[BigNumber]>;

    setPenalty(
      _penalty: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setStealthVault(
      _stealthVault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stealthVault(overrides?: CallOverrides): Promise<[string]>;
  };

  penalty(overrides?: CallOverrides): Promise<BigNumber>;

  setPenalty(
    _penalty: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setStealthVault(
    _stealthVault: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stealthVault(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    penalty(overrides?: CallOverrides): Promise<BigNumber>;

    setPenalty(
      _penalty: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setStealthVault(
      _stealthVault: string,
      overrides?: CallOverrides
    ): Promise<void>;

    stealthVault(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "MigratedStealthVault(address)"(
      _migratedTo?: null
    ): MigratedStealthVaultEventFilter;
    MigratedStealthVault(_migratedTo?: null): MigratedStealthVaultEventFilter;

    "PenaltySet(uint256)"(_penalty?: null): PenaltySetEventFilter;
    PenaltySet(_penalty?: null): PenaltySetEventFilter;

    "StealthVaultSet(address)"(
      _stealthVault?: null
    ): StealthVaultSetEventFilter;
    StealthVaultSet(_stealthVault?: null): StealthVaultSetEventFilter;
  };

  estimateGas: {
    penalty(overrides?: CallOverrides): Promise<BigNumber>;

    setPenalty(
      _penalty: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setStealthVault(
      _stealthVault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stealthVault(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    penalty(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setPenalty(
      _penalty: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setStealthVault(
      _stealthVault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stealthVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
