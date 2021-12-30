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

export interface ICrvStrategyKeep3rJobInterface extends utils.Interface {
  functions: {
    "addStrategies(address[],uint256[],uint256[])": FunctionFragment;
    "addStrategy(address,uint256,uint256)": FunctionFragment;
    "calculateHarvest(address)": FunctionFragment;
    "forceWork(address)": FunctionFragment;
    "harvestCooldown()": FunctionFragment;
    "lastHarvest()": FunctionFragment;
    "lastWorkAt(address)": FunctionFragment;
    "maxHarvestPeriod()": FunctionFragment;
    "removeStrategy(address)": FunctionFragment;
    "requiredEarn(address)": FunctionFragment;
    "requiredHarvest(address)": FunctionFragment;
    "rewardMultiplier()": FunctionFragment;
    "setHarvestCooldown(uint256)": FunctionFragment;
    "setMaxHarvestPeriod(uint256)": FunctionFragment;
    "setRewardMultiplier(uint256)": FunctionFragment;
    "strategies()": FunctionFragment;
    "updateStrategies(address[],uint256[],uint256[])": FunctionFragment;
    "updateStrategy(address,uint256,uint256)": FunctionFragment;
    "work(address)": FunctionFragment;
    "workable(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addStrategies",
    values: [string[], BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "addStrategy",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateHarvest",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "forceWork", values: [string]): string;
  encodeFunctionData(
    functionFragment: "harvestCooldown",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastHarvest",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "lastWorkAt", values: [string]): string;
  encodeFunctionData(
    functionFragment: "maxHarvestPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeStrategy",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "requiredEarn",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "requiredHarvest",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardMultiplier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setHarvestCooldown",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxHarvestPeriod",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setRewardMultiplier",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "strategies",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateStrategies",
    values: [string[], BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "updateStrategy",
    values: [string, BigNumberish, BigNumberish]
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
  decodeFunctionResult(
    functionFragment: "calculateHarvest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "forceWork", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "harvestCooldown",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastHarvest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lastWorkAt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxHarvestPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeStrategy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requiredEarn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requiredHarvest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setHarvestCooldown",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxHarvestPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRewardMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "strategies", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateStrategies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateStrategy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "work", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "workable", data: BytesLike): Result;

  events: {
    "ForceWorked(address)": EventFragment;
    "SetRewardMultiplier(uint256)": EventFragment;
    "StrategyAdded(address,uint256,uint256)": EventFragment;
    "StrategyModified(address,uint256,uint256)": EventFragment;
    "StrategyRemoved(address)": EventFragment;
    "Worked(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ForceWorked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetRewardMultiplier"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StrategyAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StrategyModified"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StrategyRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Worked"): EventFragment;
}

export type ForceWorkedEvent = TypedEvent<[string], { _strategy: string }>;

export type ForceWorkedEventFilter = TypedEventFilter<ForceWorkedEvent>;

export type SetRewardMultiplierEvent = TypedEvent<
  [BigNumber],
  { _rewardMultiplier: BigNumber }
>;

export type SetRewardMultiplierEventFilter =
  TypedEventFilter<SetRewardMultiplierEvent>;

export type StrategyAddedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { _strategy: string; _requiredHarvest: BigNumber; _requiredEarn: BigNumber }
>;

export type StrategyAddedEventFilter = TypedEventFilter<StrategyAddedEvent>;

export type StrategyModifiedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { _strategy: string; _requiredHarvest: BigNumber; _requiredEarn: BigNumber }
>;

export type StrategyModifiedEventFilter =
  TypedEventFilter<StrategyModifiedEvent>;

export type StrategyRemovedEvent = TypedEvent<[string], { _strategy: string }>;

export type StrategyRemovedEventFilter = TypedEventFilter<StrategyRemovedEvent>;

export type WorkedEvent = TypedEvent<
  [string, string, BigNumber],
  { _strategy: string; _keeper: string; _credits: BigNumber }
>;

export type WorkedEventFilter = TypedEventFilter<WorkedEvent>;

export interface ICrvStrategyKeep3rJob extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ICrvStrategyKeep3rJobInterface;

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
      _strategies: string[],
      _requiredHarvests: BigNumberish[],
      _requiredEarns: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addStrategy(
      _strategy: string,
      _requiredHarvest: BigNumberish,
      _requiredEarn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    calculateHarvest(
      _strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    forceWork(
      _strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    harvestCooldown(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _harvestCooldown: BigNumber }>;

    lastHarvest(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _lastHarvest: BigNumber }>;

    lastWorkAt(
      _strategy: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _lastWorkAt: BigNumber }>;

    maxHarvestPeriod(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _maxHarvestPeriod: BigNumber }>;

    removeStrategy(
      _strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requiredEarn(
      _strategy: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _requiredEarn: BigNumber }>;

    requiredHarvest(
      _strategy: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _requiredHarvest: BigNumber }>;

    rewardMultiplier(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _rewardMultiplier: BigNumber }>;

    setHarvestCooldown(
      _harvestCooldown: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMaxHarvestPeriod(
      _maxHarvestPeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRewardMultiplier(
      _rewardMultiplier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    strategies(
      overrides?: CallOverrides
    ): Promise<[string[]] & { _strategies: string[] }>;

    updateStrategies(
      _strategies: string[],
      _requiredHarvests: BigNumberish[],
      _requiredEarns: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateStrategy(
      _strategy: string,
      _requiredHarvest: BigNumberish,
      _requiredEarn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    work(
      _strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    workable(
      _strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addStrategies(
    _strategies: string[],
    _requiredHarvests: BigNumberish[],
    _requiredEarns: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addStrategy(
    _strategy: string,
    _requiredHarvest: BigNumberish,
    _requiredEarn: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  calculateHarvest(
    _strategy: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  forceWork(
    _strategy: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  harvestCooldown(overrides?: CallOverrides): Promise<BigNumber>;

  lastHarvest(overrides?: CallOverrides): Promise<BigNumber>;

  lastWorkAt(_strategy: string, overrides?: CallOverrides): Promise<BigNumber>;

  maxHarvestPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  removeStrategy(
    _strategy: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requiredEarn(
    _strategy: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  requiredHarvest(
    _strategy: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rewardMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

  setHarvestCooldown(
    _harvestCooldown: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMaxHarvestPeriod(
    _maxHarvestPeriod: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRewardMultiplier(
    _rewardMultiplier: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  strategies(overrides?: CallOverrides): Promise<string[]>;

  updateStrategies(
    _strategies: string[],
    _requiredHarvests: BigNumberish[],
    _requiredEarns: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateStrategy(
    _strategy: string,
    _requiredHarvest: BigNumberish,
    _requiredEarn: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  work(
    _strategy: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  workable(
    _strategy: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addStrategies(
      _strategies: string[],
      _requiredHarvests: BigNumberish[],
      _requiredEarns: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    addStrategy(
      _strategy: string,
      _requiredHarvest: BigNumberish,
      _requiredEarn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    calculateHarvest(
      _strategy: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    forceWork(_strategy: string, overrides?: CallOverrides): Promise<void>;

    harvestCooldown(overrides?: CallOverrides): Promise<BigNumber>;

    lastHarvest(overrides?: CallOverrides): Promise<BigNumber>;

    lastWorkAt(
      _strategy: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxHarvestPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    removeStrategy(_strategy: string, overrides?: CallOverrides): Promise<void>;

    requiredEarn(
      _strategy: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    requiredHarvest(
      _strategy: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

    setHarvestCooldown(
      _harvestCooldown: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMaxHarvestPeriod(
      _maxHarvestPeriod: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setRewardMultiplier(
      _rewardMultiplier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    strategies(overrides?: CallOverrides): Promise<string[]>;

    updateStrategies(
      _strategies: string[],
      _requiredHarvests: BigNumberish[],
      _requiredEarns: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    updateStrategy(
      _strategy: string,
      _requiredHarvest: BigNumberish,
      _requiredEarn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    work(_strategy: string, overrides?: CallOverrides): Promise<BigNumber>;

    workable(_strategy: string, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    "ForceWorked(address)"(_strategy?: null): ForceWorkedEventFilter;
    ForceWorked(_strategy?: null): ForceWorkedEventFilter;

    "SetRewardMultiplier(uint256)"(
      _rewardMultiplier?: null
    ): SetRewardMultiplierEventFilter;
    SetRewardMultiplier(
      _rewardMultiplier?: null
    ): SetRewardMultiplierEventFilter;

    "StrategyAdded(address,uint256,uint256)"(
      _strategy?: null,
      _requiredHarvest?: null,
      _requiredEarn?: null
    ): StrategyAddedEventFilter;
    StrategyAdded(
      _strategy?: null,
      _requiredHarvest?: null,
      _requiredEarn?: null
    ): StrategyAddedEventFilter;

    "StrategyModified(address,uint256,uint256)"(
      _strategy?: null,
      _requiredHarvest?: null,
      _requiredEarn?: null
    ): StrategyModifiedEventFilter;
    StrategyModified(
      _strategy?: null,
      _requiredHarvest?: null,
      _requiredEarn?: null
    ): StrategyModifiedEventFilter;

    "StrategyRemoved(address)"(_strategy?: null): StrategyRemovedEventFilter;
    StrategyRemoved(_strategy?: null): StrategyRemovedEventFilter;

    "Worked(address,address,uint256)"(
      _strategy?: null,
      _keeper?: null,
      _credits?: null
    ): WorkedEventFilter;
    Worked(
      _strategy?: null,
      _keeper?: null,
      _credits?: null
    ): WorkedEventFilter;
  };

  estimateGas: {
    addStrategies(
      _strategies: string[],
      _requiredHarvests: BigNumberish[],
      _requiredEarns: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addStrategy(
      _strategy: string,
      _requiredHarvest: BigNumberish,
      _requiredEarn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    calculateHarvest(
      _strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    forceWork(
      _strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    harvestCooldown(overrides?: CallOverrides): Promise<BigNumber>;

    lastHarvest(overrides?: CallOverrides): Promise<BigNumber>;

    lastWorkAt(
      _strategy: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxHarvestPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    removeStrategy(
      _strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requiredEarn(
      _strategy: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    requiredHarvest(
      _strategy: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

    setHarvestCooldown(
      _harvestCooldown: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMaxHarvestPeriod(
      _maxHarvestPeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRewardMultiplier(
      _rewardMultiplier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    strategies(overrides?: CallOverrides): Promise<BigNumber>;

    updateStrategies(
      _strategies: string[],
      _requiredHarvests: BigNumberish[],
      _requiredEarns: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateStrategy(
      _strategy: string,
      _requiredHarvest: BigNumberish,
      _requiredEarn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    work(
      _strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    workable(
      _strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addStrategies(
      _strategies: string[],
      _requiredHarvests: BigNumberish[],
      _requiredEarns: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addStrategy(
      _strategy: string,
      _requiredHarvest: BigNumberish,
      _requiredEarn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    calculateHarvest(
      _strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    forceWork(
      _strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    harvestCooldown(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastHarvest(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastWorkAt(
      _strategy: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxHarvestPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeStrategy(
      _strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requiredEarn(
      _strategy: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    requiredHarvest(
      _strategy: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardMultiplier(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setHarvestCooldown(
      _harvestCooldown: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMaxHarvestPeriod(
      _maxHarvestPeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRewardMultiplier(
      _rewardMultiplier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    strategies(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateStrategies(
      _strategies: string[],
      _requiredHarvests: BigNumberish[],
      _requiredEarns: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateStrategy(
      _strategy: string,
      _requiredHarvest: BigNumberish,
      _requiredEarn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    work(
      _strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    workable(
      _strategy: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
