/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Controller, ControllerInterface } from "../Controller";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "rewards",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "vaults",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

export class Controller__factory {
  static readonly abi = _abi;
  static createInterface(): ControllerInterface {
    return new utils.Interface(_abi) as ControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Controller {
    return new Contract(address, _abi, signerOrProvider) as Controller;
  }
}
