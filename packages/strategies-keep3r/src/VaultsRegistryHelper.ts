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

export interface VaultsRegistryHelperInterface extends utils.Interface {
  functions: {
    "ETH_ADDRESS()": FunctionFragment;
    "acceptGovernor()": FunctionFragment;
    "getVaultStrategies(address)": FunctionFragment;
    "getVaults()": FunctionFragment;
    "getVaultsAndStrategies()": FunctionFragment;
    "governor()": FunctionFragment;
    "isGovernor(address)": FunctionFragment;
    "pause(bool)": FunctionFragment;
    "paused()": FunctionFragment;
    "pendingGovernor()": FunctionFragment;
    "registry()": FunctionFragment;
    "sendDust(address,address,uint256)": FunctionFragment;
    "setPendingGovernor(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ETH_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "acceptGovernor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getVaultStrategies",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "getVaults", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getVaultsAndStrategies",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "governor", values?: undefined): string;
  encodeFunctionData(functionFragment: "isGovernor", values: [string]): string;
  encodeFunctionData(functionFragment: "pause", values: [boolean]): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingGovernor",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "registry", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sendDust",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPendingGovernor",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "ETH_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptGovernor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVaultStrategies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getVaults", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getVaultsAndStrategies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isGovernor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingGovernor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sendDust", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setPendingGovernor",
    data: BytesLike
  ): Result;

  events: {
    "DustSent(address,address,uint256)": EventFragment;
    "GovernorAccepted()": EventFragment;
    "Paused(bool)": EventFragment;
    "PendingGovernorSet(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DustSent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GovernorAccepted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PendingGovernorSet"): EventFragment;
}

export type DustSentEvent = TypedEvent<
  [string, string, BigNumber],
  { _to: string; token: string; amount: BigNumber }
>;

export type DustSentEventFilter = TypedEventFilter<DustSentEvent>;

export type GovernorAcceptedEvent = TypedEvent<[], {}>;

export type GovernorAcceptedEventFilter =
  TypedEventFilter<GovernorAcceptedEvent>;

export type PausedEvent = TypedEvent<[boolean], { _paused: boolean }>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export type PendingGovernorSetEvent = TypedEvent<
  [string],
  { pendingGovernor: string }
>;

export type PendingGovernorSetEventFilter =
  TypedEventFilter<PendingGovernorSetEvent>;

export interface VaultsRegistryHelper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VaultsRegistryHelperInterface;

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
    ETH_ADDRESS(overrides?: CallOverrides): Promise<[string]>;

    acceptGovernor(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getVaultStrategies(
      _vault: string,
      overrides?: CallOverrides
    ): Promise<[string[]] & { _strategies: string[] }>;

    getVaults(
      overrides?: CallOverrides
    ): Promise<[string[]] & { _vaults: string[] }>;

    getVaultsAndStrategies(
      overrides?: CallOverrides
    ): Promise<
      [string[], string[]] & { _vaults: string[]; _strategies: string[] }
    >;

    governor(overrides?: CallOverrides): Promise<[string]>;

    isGovernor(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { _isGovernor: boolean }>;

    pause(
      _paused: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    pendingGovernor(overrides?: CallOverrides): Promise<[string]>;

    registry(overrides?: CallOverrides): Promise<[string]>;

    sendDust(
      _to: string,
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPendingGovernor(
      _pendingGovernor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  ETH_ADDRESS(overrides?: CallOverrides): Promise<string>;

  acceptGovernor(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getVaultStrategies(
    _vault: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getVaults(overrides?: CallOverrides): Promise<string[]>;

  getVaultsAndStrategies(
    overrides?: CallOverrides
  ): Promise<
    [string[], string[]] & { _vaults: string[]; _strategies: string[] }
  >;

  governor(overrides?: CallOverrides): Promise<string>;

  isGovernor(_account: string, overrides?: CallOverrides): Promise<boolean>;

  pause(
    _paused: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  pendingGovernor(overrides?: CallOverrides): Promise<string>;

  registry(overrides?: CallOverrides): Promise<string>;

  sendDust(
    _to: string,
    _token: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPendingGovernor(
    _pendingGovernor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ETH_ADDRESS(overrides?: CallOverrides): Promise<string>;

    acceptGovernor(overrides?: CallOverrides): Promise<void>;

    getVaultStrategies(
      _vault: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getVaults(overrides?: CallOverrides): Promise<string[]>;

    getVaultsAndStrategies(
      overrides?: CallOverrides
    ): Promise<
      [string[], string[]] & { _vaults: string[]; _strategies: string[] }
    >;

    governor(overrides?: CallOverrides): Promise<string>;

    isGovernor(_account: string, overrides?: CallOverrides): Promise<boolean>;

    pause(_paused: boolean, overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    pendingGovernor(overrides?: CallOverrides): Promise<string>;

    registry(overrides?: CallOverrides): Promise<string>;

    sendDust(
      _to: string,
      _token: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setPendingGovernor(
      _pendingGovernor: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "DustSent(address,address,uint256)"(
      _to?: null,
      token?: null,
      amount?: null
    ): DustSentEventFilter;
    DustSent(_to?: null, token?: null, amount?: null): DustSentEventFilter;

    "GovernorAccepted()"(): GovernorAcceptedEventFilter;
    GovernorAccepted(): GovernorAcceptedEventFilter;

    "Paused(bool)"(_paused?: null): PausedEventFilter;
    Paused(_paused?: null): PausedEventFilter;

    "PendingGovernorSet(address)"(
      pendingGovernor?: null
    ): PendingGovernorSetEventFilter;
    PendingGovernorSet(pendingGovernor?: null): PendingGovernorSetEventFilter;
  };

  estimateGas: {
    ETH_ADDRESS(overrides?: CallOverrides): Promise<BigNumber>;

    acceptGovernor(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getVaultStrategies(
      _vault: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVaults(overrides?: CallOverrides): Promise<BigNumber>;

    getVaultsAndStrategies(overrides?: CallOverrides): Promise<BigNumber>;

    governor(overrides?: CallOverrides): Promise<BigNumber>;

    isGovernor(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      _paused: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    pendingGovernor(overrides?: CallOverrides): Promise<BigNumber>;

    registry(overrides?: CallOverrides): Promise<BigNumber>;

    sendDust(
      _to: string,
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPendingGovernor(
      _pendingGovernor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ETH_ADDRESS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    acceptGovernor(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getVaultStrategies(
      _vault: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVaults(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getVaultsAndStrategies(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isGovernor(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pause(
      _paused: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingGovernor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sendDust(
      _to: string,
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPendingGovernor(
      _pendingGovernor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
