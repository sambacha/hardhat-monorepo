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

export interface ICollectableDustInterface extends utils.Interface {
  functions: {
    "sendDust(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "sendDust",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "sendDust", data: BytesLike): Result;

  events: {
    "DustSent(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DustSent"): EventFragment;
}

export type DustSentEvent = TypedEvent<
  [string, string, BigNumber],
  { _to: string; token: string; amount: BigNumber }
>;

export type DustSentEventFilter = TypedEventFilter<DustSentEvent>;

export interface ICollectableDust extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ICollectableDustInterface;

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
    sendDust(
      _to: string,
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  sendDust(
    _to: string,
    _token: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    sendDust(
      _to: string,
      _token: string,
      _amount: BigNumberish,
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
  };

  estimateGas: {
    sendDust(
      _to: string,
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    sendDust(
      _to: string,
      _token: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
