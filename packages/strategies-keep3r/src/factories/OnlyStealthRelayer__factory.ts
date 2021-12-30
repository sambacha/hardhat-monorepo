/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  OnlyStealthRelayer,
  OnlyStealthRelayerInterface,
} from "../OnlyStealthRelayer";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_stealthRelayer",
        type: "address",
      },
    ],
    name: "StealthRelayerSet",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_stealthRelayer",
        type: "address",
      },
    ],
    name: "setStealthRelayer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stealthRelayer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class OnlyStealthRelayer__factory {
  static readonly abi = _abi;
  static createInterface(): OnlyStealthRelayerInterface {
    return new utils.Interface(_abi) as OnlyStealthRelayerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OnlyStealthRelayer {
    return new Contract(address, _abi, signerOrProvider) as OnlyStealthRelayer;
  }
}
