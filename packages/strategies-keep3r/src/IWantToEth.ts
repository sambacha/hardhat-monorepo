/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IWantToEthInterface extends utils.Interface {
  functions: {
    "ethToWant(uint256)": FunctionFragment;
    "wantToEth(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ethToWant",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "wantToEth",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "ethToWant", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wantToEth", data: BytesLike): Result;

  events: {};
}

export interface IWantToEth extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IWantToEthInterface;

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
    ethToWant(
      input: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    wantToEth(
      input: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  ethToWant(input: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  wantToEth(input: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    ethToWant(
      input: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wantToEth(
      input: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    ethToWant(
      input: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wantToEth(
      input: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ethToWant(
      input: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    wantToEth(
      input: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
