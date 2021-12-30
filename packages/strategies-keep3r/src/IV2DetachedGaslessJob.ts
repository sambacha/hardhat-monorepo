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

export interface IV2DetachedGaslessJobInterface extends utils.Interface {
  functions: {
    "addStrategies(address[],address[],address[])": FunctionFragment;
    "addStrategy(address,address,address)": FunctionFragment;
    "forceWork(address)": FunctionFragment;
    "removeStrategy(address)": FunctionFragment;
    "setV2Keep3r(address)": FunctionFragment;
    "setWorkCooldown(uint256)": FunctionFragment;
    "setYOracle(address)": FunctionFragment;
    "strategies()": FunctionFragment;
    "updateCostTokenAndPair(address,address,address)": FunctionFragment;
    "work(address)": FunctionFragment;
    "workable(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addStrategies",
    values: [string[], string[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addStrategy",
    values: [string, string, string]
  ): string;
  encodeFunctionData(functionFragment: "forceWork", values: [string]): string;
  encodeFunctionData(
    functionFragment: "removeStrategy",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setV2Keep3r", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setWorkCooldown",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setYOracle", values: [string]): string;
  encodeFunctionData(
    functionFragment: "strategies",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateCostTokenAndPair",
    values: [string, string, string]
  ): string;
  encodeFunctionData(functionFragment: "work", values: [string]): string;
  encodeFunctionData(functionFragment: "workable", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "addStrategies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addStrategy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "forceWork", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeStrategy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setV2Keep3r",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setWorkCooldown",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setYOracle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "strategies", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateCostTokenAndPair",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "work", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "workable", data: BytesLike): Result;

  events: {
    "ForceWorked(address)": EventFragment;
    "StrategyAdded(address)": EventFragment;
    "StrategyModified(address)": EventFragment;
    "StrategyRemoved(address)": EventFragment;
    "Worked(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ForceWorked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StrategyAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StrategyModified"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StrategyRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Worked"): EventFragment;
}

export type ForceWorkedEvent = TypedEvent<[string], { _strategy: string }>;

export type ForceWorkedEventFilter = TypedEventFilter<ForceWorkedEvent>;

export type StrategyAddedEvent = TypedEvent<[string], { _strategy: string }>;

export type StrategyAddedEventFilter = TypedEventFilter<StrategyAddedEvent>;

export type StrategyModifiedEvent = TypedEvent<[string], { _strategy: string }>;

export type StrategyModifiedEventFilter =
  TypedEventFilter<StrategyModifiedEvent>;

export type StrategyRemovedEvent = TypedEvent<[string], { _strategy: string }>;

export type StrategyRemovedEventFilter = TypedEventFilter<StrategyRemovedEvent>;

export type WorkedEvent = TypedEvent<
  [string, string],
  { _strategy: string; _keeper: string }
>;

export type WorkedEventFilter = TypedEventFilter<WorkedEvent>;

export interface IV2DetachedGaslessJob extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IV2DetachedGaslessJobInterface;

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
    addStrategies(
      _strategy: string[],
      _costTokens: string[],
      _costPairs: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addStrategy(
      _strategy: string,
      _costToken: string,
      _costPair: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    forceWork(
      _strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeStrategy(
      _strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setV2Keep3r(
      _v2Keeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setWorkCooldown(
      _workCooldown: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setYOracle(
      _v2Keeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    strategies(overrides?: CallOverrides): Promise<[string[]]>;

    updateCostTokenAndPair(
      _strategy: string,
      _costToken: string,
      _costPair: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    work(
      _strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    workable(_strategy: string, overrides?: CallOverrides): Promise<[boolean]>;
  };

  addStrategies(
    _strategy: string[],
    _costTokens: string[],
    _costPairs: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addStrategy(
    _strategy: string,
    _costToken: string,
    _costPair: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  forceWork(
    _strategy: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeStrategy(
    _strategy: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setV2Keep3r(
    _v2Keeper: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setWorkCooldown(
    _workCooldown: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setYOracle(
    _v2Keeper: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  strategies(overrides?: CallOverrides): Promise<string[]>;

  updateCostTokenAndPair(
    _strategy: string,
    _costToken: string,
    _costPair: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  work(
    _strategy: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  workable(_strategy: string, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    addStrategies(
      _strategy: string[],
      _costTokens: string[],
      _costPairs: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    addStrategy(
      _strategy: string,
      _costToken: string,
      _costPair: string,
      overrides?: CallOverrides
    ): Promise<void>;

    forceWork(_strategy: string, overrides?: CallOverrides): Promise<void>;

    removeStrategy(_strategy: string, overrides?: CallOverrides): Promise<void>;

    setV2Keep3r(_v2Keeper: string, overrides?: CallOverrides): Promise<void>;

    setWorkCooldown(
      _workCooldown: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setYOracle(_v2Keeper: string, overrides?: CallOverrides): Promise<void>;

    strategies(overrides?: CallOverrides): Promise<string[]>;

    updateCostTokenAndPair(
      _strategy: string,
      _costToken: string,
      _costPair: string,
      overrides?: CallOverrides
    ): Promise<void>;

    work(_strategy: string, overrides?: CallOverrides): Promise<void>;

    workable(_strategy: string, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    "ForceWorked(address)"(_strategy?: null): ForceWorkedEventFilter;
    ForceWorked(_strategy?: null): ForceWorkedEventFilter;

    "StrategyAdded(address)"(_strategy?: null): StrategyAddedEventFilter;
    StrategyAdded(_strategy?: null): StrategyAddedEventFilter;

    "StrategyModified(address)"(_strategy?: null): StrategyModifiedEventFilter;
    StrategyModified(_strategy?: null): StrategyModifiedEventFilter;

    "StrategyRemoved(address)"(_strategy?: null): StrategyRemovedEventFilter;
    StrategyRemoved(_strategy?: null): StrategyRemovedEventFilter;

    "Worked(address,address)"(
      _strategy?: null,
      _keeper?: null
    ): WorkedEventFilter;
    Worked(_strategy?: null, _keeper?: null): WorkedEventFilter;
  };

  estimateGas: {
    addStrategies(
      _strategy: string[],
      _costTokens: string[],
      _costPairs: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addStrategy(
      _strategy: string,
      _costToken: string,
      _costPair: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    forceWork(
      _strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeStrategy(
      _strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setV2Keep3r(
      _v2Keeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setWorkCooldown(
      _workCooldown: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setYOracle(
      _v2Keeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    strategies(overrides?: CallOverrides): Promise<BigNumber>;

    updateCostTokenAndPair(
      _strategy: string,
      _costToken: string,
      _costPair: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    work(
      _strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    workable(_strategy: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addStrategies(
      _strategy: string[],
      _costTokens: string[],
      _costPairs: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addStrategy(
      _strategy: string,
      _costToken: string,
      _costPair: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    forceWork(
      _strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeStrategy(
      _strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setV2Keep3r(
      _v2Keeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setWorkCooldown(
      _workCooldown: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setYOracle(
      _v2Keeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    strategies(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateCostTokenAndPair(
      _strategy: string,
      _costToken: string,
      _costPair: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    work(
      _strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    workable(
      _strategy: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
