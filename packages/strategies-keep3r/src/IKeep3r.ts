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

export interface IKeep3rInterface extends utils.Interface {
  functions: {
    "age()": FunctionFragment;
    "bond()": FunctionFragment;
    "earned()": FunctionFragment;
    "keep3r()": FunctionFragment;
    "minBond()": FunctionFragment;
    "onlyEOA()": FunctionFragment;
    "setKeep3r(address)": FunctionFragment;
    "setKeep3rRequirements(address,uint256,uint256,uint256,bool)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "age", values?: undefined): string;
  encodeFunctionData(functionFragment: "bond", values?: undefined): string;
  encodeFunctionData(functionFragment: "earned", values?: undefined): string;
  encodeFunctionData(functionFragment: "keep3r", values?: undefined): string;
  encodeFunctionData(functionFragment: "minBond", values?: undefined): string;
  encodeFunctionData(functionFragment: "onlyEOA", values?: undefined): string;
  encodeFunctionData(functionFragment: "setKeep3r", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setKeep3rRequirements",
    values: [string, BigNumberish, BigNumberish, BigNumberish, boolean]
  ): string;

  decodeFunctionResult(functionFragment: "age", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bond", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "keep3r", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "minBond", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "onlyEOA", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setKeep3r", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setKeep3rRequirements",
    data: BytesLike
  ): Result;

  events: {
    "Keep3rRequirementsSet(address,uint256,uint256,uint256,bool)": EventFragment;
    "Keep3rSet(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Keep3rRequirementsSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Keep3rSet"): EventFragment;
}

export type Keep3rRequirementsSetEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, boolean],
  {
    _bond: string;
    _minBond: BigNumber;
    _earned: BigNumber;
    _age: BigNumber;
    _onlyEOA: boolean;
  }
>;

export type Keep3rRequirementsSetEventFilter =
  TypedEventFilter<Keep3rRequirementsSetEvent>;

export type Keep3rSetEvent = TypedEvent<[string], { _keep3r: string }>;

export type Keep3rSetEventFilter = TypedEventFilter<Keep3rSetEvent>;

export interface IKeep3r extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IKeep3rInterface;

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
    age(overrides?: CallOverrides): Promise<[BigNumber] & { _age: BigNumber }>;

    bond(overrides?: CallOverrides): Promise<[string] & { _bond: string }>;

    earned(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _earned: BigNumber }>;

    keep3r(overrides?: CallOverrides): Promise<[string] & { _keep3r: string }>;

    minBond(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { _minBond: BigNumber }>;

    onlyEOA(
      overrides?: CallOverrides
    ): Promise<[boolean] & { _onlyEOA: boolean }>;

    setKeep3r(
      _keep3r: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setKeep3rRequirements(
      _bond: string,
      _minBond: BigNumberish,
      _earned: BigNumberish,
      _age: BigNumberish,
      _onlyEOA: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  age(overrides?: CallOverrides): Promise<BigNumber>;

  bond(overrides?: CallOverrides): Promise<string>;

  earned(overrides?: CallOverrides): Promise<BigNumber>;

  keep3r(overrides?: CallOverrides): Promise<string>;

  minBond(overrides?: CallOverrides): Promise<BigNumber>;

  onlyEOA(overrides?: CallOverrides): Promise<boolean>;

  setKeep3r(
    _keep3r: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setKeep3rRequirements(
    _bond: string,
    _minBond: BigNumberish,
    _earned: BigNumberish,
    _age: BigNumberish,
    _onlyEOA: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    age(overrides?: CallOverrides): Promise<BigNumber>;

    bond(overrides?: CallOverrides): Promise<string>;

    earned(overrides?: CallOverrides): Promise<BigNumber>;

    keep3r(overrides?: CallOverrides): Promise<string>;

    minBond(overrides?: CallOverrides): Promise<BigNumber>;

    onlyEOA(overrides?: CallOverrides): Promise<boolean>;

    setKeep3r(_keep3r: string, overrides?: CallOverrides): Promise<void>;

    setKeep3rRequirements(
      _bond: string,
      _minBond: BigNumberish,
      _earned: BigNumberish,
      _age: BigNumberish,
      _onlyEOA: boolean,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Keep3rRequirementsSet(address,uint256,uint256,uint256,bool)"(
      _bond?: null,
      _minBond?: null,
      _earned?: null,
      _age?: null,
      _onlyEOA?: null
    ): Keep3rRequirementsSetEventFilter;
    Keep3rRequirementsSet(
      _bond?: null,
      _minBond?: null,
      _earned?: null,
      _age?: null,
      _onlyEOA?: null
    ): Keep3rRequirementsSetEventFilter;

    "Keep3rSet(address)"(_keep3r?: null): Keep3rSetEventFilter;
    Keep3rSet(_keep3r?: null): Keep3rSetEventFilter;
  };

  estimateGas: {
    age(overrides?: CallOverrides): Promise<BigNumber>;

    bond(overrides?: CallOverrides): Promise<BigNumber>;

    earned(overrides?: CallOverrides): Promise<BigNumber>;

    keep3r(overrides?: CallOverrides): Promise<BigNumber>;

    minBond(overrides?: CallOverrides): Promise<BigNumber>;

    onlyEOA(overrides?: CallOverrides): Promise<BigNumber>;

    setKeep3r(
      _keep3r: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setKeep3rRequirements(
      _bond: string,
      _minBond: BigNumberish,
      _earned: BigNumberish,
      _age: BigNumberish,
      _onlyEOA: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    age(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bond(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    earned(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    keep3r(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minBond(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onlyEOA(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setKeep3r(
      _keep3r: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setKeep3rRequirements(
      _bond: string,
      _minBond: BigNumberish,
      _earned: BigNumberish,
      _age: BigNumberish,
      _onlyEOA: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
