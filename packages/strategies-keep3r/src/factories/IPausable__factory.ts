/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IPausable, IPausableInterface } from "../IPausable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "_paused",
        type: "bool",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_paused",
        type: "bool",
      },
    ],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IPausable__factory {
  static readonly abi = _abi;
  static createInterface(): IPausableInterface {
    return new utils.Interface(_abi) as IPausableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPausable {
    return new Contract(address, _abi, signerOrProvider) as IPausable;
  }
}
