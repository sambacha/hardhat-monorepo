/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IManageable, IManageableInterface } from "../IManageable";

const _abi = [
  {
    anonymous: false,
    inputs: [],
    name: "ManagerAccepted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "pendingManager",
        type: "address",
      },
    ],
    name: "PendingManagerSet",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "isManager",
    outputs: [
      {
        internalType: "bool",
        name: "_isManager",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "manager",
    outputs: [
      {
        internalType: "address",
        name: "_manager",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingManager",
    outputs: [
      {
        internalType: "address",
        name: "_pendingManager",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pendingManager",
        type: "address",
      },
    ],
    name: "setPendingManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IManageable__factory {
  static readonly abi = _abi;
  static createInterface(): IManageableInterface {
    return new utils.Interface(_abi) as IManageableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IManageable {
    return new Contract(address, _abi, signerOrProvider) as IManageable;
  }
}
