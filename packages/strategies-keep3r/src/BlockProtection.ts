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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface BlockProtectionInterface extends utils.Interface {
  functions: {
    "ETH_ADDRESS()": FunctionFragment;
    "acceptGovernor()": FunctionFragment;
    "callWithBlockProtection(address,bytes,uint256)": FunctionFragment;
    "governor()": FunctionFragment;
    "isGovernor(address)": FunctionFragment;
    "isMechanic(address)": FunctionFragment;
    "mechanicsRegistry()": FunctionFragment;
    "pause(bool)": FunctionFragment;
    "paused()": FunctionFragment;
    "pendingGovernor()": FunctionFragment;
    "sendDust(address,address,uint256)": FunctionFragment;
    "setMechanicsRegistry(address)": FunctionFragment;
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
    functionFragment: "callWithBlockProtection",
    values: [string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "governor", values?: undefined): string;
  encodeFunctionData(functionFragment: "isGovernor", values: [string]): string;
  encodeFunctionData(functionFragment: "isMechanic", values: [string]): string;
  encodeFunctionData(
    functionFragment: "mechanicsRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pause", values: [boolean]): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingGovernor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sendDust",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMechanicsRegistry",
    values: [string]
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
    functionFragment: "callWithBlockProtection",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "governor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isGovernor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isMechanic", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mechanicsRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingGovernor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sendDust", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMechanicsRegistry",
    data: BytesLike
  ): Result;
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

export interface BlockProtection extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BlockProtectionInterface;

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

    callWithBlockProtection(
      _to: string,
      _data: BytesLike,
      _blockNumber: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    governor(overrides?: CallOverrides): Promise<[string]>;

    isGovernor(
      _account: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { _isGovernor: boolean }>;

    isMechanic(
      _mechanic: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { _isMechanic: boolean }>;

    mechanicsRegistry(
      overrides?: CallOverrides
    ): Promise<[string] & { _mechanicRegistry: string }>;

    pause(
      _paused: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    pendingGovernor(overrides?: CallOverrides): Promise<[string]>;

    sendDust(
      _to: string,
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMechanicsRegistry(
      _mechanicsRegistry: string,
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

  callWithBlockProtection(
    _to: string,
    _data: BytesLike,
    _blockNumber: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  governor(overrides?: CallOverrides): Promise<string>;

  isGovernor(_account: string, overrides?: CallOverrides): Promise<boolean>;

  isMechanic(_mechanic: string, overrides?: CallOverrides): Promise<boolean>;

  mechanicsRegistry(overrides?: CallOverrides): Promise<string>;

  pause(
    _paused: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  pendingGovernor(overrides?: CallOverrides): Promise<string>;

  sendDust(
    _to: string,
    _token: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMechanicsRegistry(
    _mechanicsRegistry: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPendingGovernor(
    _pendingGovernor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ETH_ADDRESS(overrides?: CallOverrides): Promise<string>;

    acceptGovernor(overrides?: CallOverrides): Promise<void>;

    callWithBlockProtection(
      _to: string,
      _data: BytesLike,
      _blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    governor(overrides?: CallOverrides): Promise<string>;

    isGovernor(_account: string, overrides?: CallOverrides): Promise<boolean>;

    isMechanic(_mechanic: string, overrides?: CallOverrides): Promise<boolean>;

    mechanicsRegistry(overrides?: CallOverrides): Promise<string>;

    pause(_paused: boolean, overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    pendingGovernor(overrides?: CallOverrides): Promise<string>;

    sendDust(
      _to: string,
      _token: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMechanicsRegistry(
      _mechanicsRegistry: string,
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

    callWithBlockProtection(
      _to: string,
      _data: BytesLike,
      _blockNumber: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    governor(overrides?: CallOverrides): Promise<BigNumber>;

    isGovernor(_account: string, overrides?: CallOverrides): Promise<BigNumber>;

    isMechanic(
      _mechanic: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mechanicsRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      _paused: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    pendingGovernor(overrides?: CallOverrides): Promise<BigNumber>;

    sendDust(
      _to: string,
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMechanicsRegistry(
      _mechanicsRegistry: string,
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

    callWithBlockProtection(
      _to: string,
      _data: BytesLike,
      _blockNumber: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    governor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isGovernor(
      _account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isMechanic(
      _mechanic: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mechanicsRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      _paused: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingGovernor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sendDust(
      _to: string,
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMechanicsRegistry(
      _mechanicsRegistry: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPendingGovernor(
      _pendingGovernor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
