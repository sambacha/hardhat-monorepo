/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IV1Registry, IV1RegistryInterface } from "../IV1Registry";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getVault",
    outputs: [
      {
        internalType: "address",
        name: "vault",
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
        name: "_vault",
        type: "address",
      },
    ],
    name: "getVaultInfo",
    outputs: [
      {
        internalType: "address",
        name: "controller",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "strategy",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isWrapped",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isDelegated",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getVaults",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getVaultsInfo",
    outputs: [
      {
        internalType: "address[]",
        name: "controllerArray",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "tokenArray",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "strategyArray",
        type: "address[]",
      },
      {
        internalType: "bool[]",
        name: "isWrappedArray",
        type: "bool[]",
      },
      {
        internalType: "bool[]",
        name: "isDelegatedArray",
        type: "bool[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_vault",
        type: "address",
      },
    ],
    name: "isDelegatedVault",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_vault",
        type: "address",
      },
    ],
    name: "wrappedVaults",
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

export class IV1Registry__factory {
  static readonly abi = _abi;
  static createInterface(): IV1RegistryInterface {
    return new utils.Interface(_abi) as IV1RegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IV1Registry {
    return new Contract(address, _abi, signerOrProvider) as IV1Registry;
  }
}
