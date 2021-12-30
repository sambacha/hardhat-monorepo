/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IVaultsRegistryHelper,
  IVaultsRegistryHelperInterface,
} from "../IVaultsRegistryHelper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_vault",
        type: "address",
      },
    ],
    name: "getVaultStrategies",
    outputs: [
      {
        internalType: "address[]",
        name: "_strategies",
        type: "address[]",
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
        name: "_vaults",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getVaultsAndStrategies",
    outputs: [
      {
        internalType: "address[]",
        name: "_vaults",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_strategies",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "registry",
    outputs: [
      {
        internalType: "address",
        name: "_registry",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IVaultsRegistryHelper__factory {
  static readonly abi = _abi;
  static createInterface(): IVaultsRegistryHelperInterface {
    return new utils.Interface(_abi) as IVaultsRegistryHelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IVaultsRegistryHelper {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IVaultsRegistryHelper;
  }
}
