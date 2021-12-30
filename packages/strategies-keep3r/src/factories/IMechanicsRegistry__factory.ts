/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IMechanicsRegistry,
  IMechanicsRegistryInterface,
} from "../IMechanicsRegistry";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_mechanic",
        type: "address",
      },
    ],
    name: "MechanicAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_mechanic",
        type: "address",
      },
    ],
    name: "MechanicRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_mechanic",
        type: "address",
      },
    ],
    name: "addMechanic",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "mechanic",
        type: "address",
      },
    ],
    name: "isMechanic",
    outputs: [
      {
        internalType: "bool",
        name: "_isMechanic",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mechanics",
    outputs: [
      {
        internalType: "address[]",
        name: "_mechanicsList",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_mechanic",
        type: "address",
      },
    ],
    name: "removeMechanic",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IMechanicsRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): IMechanicsRegistryInterface {
    return new utils.Interface(_abi) as IMechanicsRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMechanicsRegistry {
    return new Contract(address, _abi, signerOrProvider) as IMechanicsRegistry;
  }
}
