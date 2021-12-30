/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IV1ControllerInterface extends utils.Interface {
  functions: {
    "stretegies(address)": FunctionFragment;
    "vaults(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "stretegies", values: [string]): string;
  encodeFunctionData(functionFragment: "vaults", values: [string]): string;

  decodeFunctionResult(functionFragment: "stretegies", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vaults", data: BytesLike): Result;

  events: {};
}

export interface IV1Controller extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IV1ControllerInterface;

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
    stretegies(
      _want: string,
      overrides?: CallOverrides
    ): Promise<[string] & { _strategy: string }>;

    vaults(
      _want: string,
      overrides?: CallOverrides
    ): Promise<[string] & { _vault: string }>;
  };

  stretegies(_want: string, overrides?: CallOverrides): Promise<string>;

  vaults(_want: string, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    stretegies(_want: string, overrides?: CallOverrides): Promise<string>;

    vaults(_want: string, overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    stretegies(_want: string, overrides?: CallOverrides): Promise<BigNumber>;

    vaults(_want: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    stretegies(
      _want: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vaults(
      _want: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
