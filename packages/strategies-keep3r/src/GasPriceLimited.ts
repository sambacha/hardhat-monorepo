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

export interface GasPriceLimitedInterface extends utils.Interface {
  functions: {
    "FASTGAS()": FunctionFragment;
    "maxGasPrice()": FunctionFragment;
    "setMaxGasPrice(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "FASTGAS", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "maxGasPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxGasPrice",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "FASTGAS", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxGasPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMaxGasPrice",
    data: BytesLike
  ): Result;

  events: {
    "SetMaxGasPrice(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SetMaxGasPrice"): EventFragment;
}

export type SetMaxGasPriceEvent = TypedEvent<
  [BigNumber],
  { _maxGasPrice: BigNumber }
>;

export type SetMaxGasPriceEventFilter = TypedEventFilter<SetMaxGasPriceEvent>;

export interface GasPriceLimited extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GasPriceLimitedInterface;

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
    FASTGAS(overrides?: CallOverrides): Promise<[string]>;

    maxGasPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    setMaxGasPrice(
      _maxGasPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  FASTGAS(overrides?: CallOverrides): Promise<string>;

  maxGasPrice(overrides?: CallOverrides): Promise<BigNumber>;

  setMaxGasPrice(
    _maxGasPrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    FASTGAS(overrides?: CallOverrides): Promise<string>;

    maxGasPrice(overrides?: CallOverrides): Promise<BigNumber>;

    setMaxGasPrice(
      _maxGasPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "SetMaxGasPrice(uint256)"(_maxGasPrice?: null): SetMaxGasPriceEventFilter;
    SetMaxGasPrice(_maxGasPrice?: null): SetMaxGasPriceEventFilter;
  };

  estimateGas: {
    FASTGAS(overrides?: CallOverrides): Promise<BigNumber>;

    maxGasPrice(overrides?: CallOverrides): Promise<BigNumber>;

    setMaxGasPrice(
      _maxGasPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    FASTGAS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxGasPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setMaxGasPrice(
      _maxGasPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
