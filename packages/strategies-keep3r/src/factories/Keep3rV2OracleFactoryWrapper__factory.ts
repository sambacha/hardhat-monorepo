/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Keep3rV2OracleFactoryWrapper,
  Keep3rV2OracleFactoryWrapperInterface,
} from "../Keep3rV2OracleFactoryWrapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_keep3rV2OracleFactory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "DustSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "GovernorAccepted",
    type: "event",
  },
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "pendingGovernor",
        type: "address",
      },
    ],
    name: "PendingGovernorSet",
    type: "event",
  },
  {
    inputs: [],
    name: "ETH_ADDRESS",
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
  {
    inputs: [],
    name: "acceptGovernor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pair",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenIn",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amountIn",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_tokenOut",
        type: "address",
      },
    ],
    name: "getAmountOut",
    outputs: [
      {
        internalType: "uint256",
        name: "_amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governor",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "isGovernor",
    outputs: [
      {
        internalType: "bool",
        name: "_isGovernor",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "keep3rV2OracleFactory",
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
  {
    inputs: [],
    name: "paused",
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
    inputs: [],
    name: "pendingGovernor",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "sendDust",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_pendingGovernor",
        type: "address",
      },
    ],
    name: "setPendingGovernor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051610cb5380380610cb583398101604081905261002f916100bd565b33806100985760405162461bcd60e51b815260206004820152602e60248201527f676f7665726e61626c652f676f7665726e6f722d73686f756c642d6e6f742d6260448201526d652d7a65726f2d6164647265737360901b606482015260840160405180910390fd5b600080546001600160a01b0319166001600160a01b03928316179055166080526100ed565b6000602082840312156100cf57600080fd5b81516001600160a01b03811681146100e657600080fd5b9392505050565b608051610ba761010e6000396000818160c801526102880152610ba76000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c806388030a981161007157806388030a981461014a578063a734f06e1461016b578063e3056a3414610186578063e43581b814610199578063e58bb639146101bb578063f235757f146101c357600080fd5b806302329a29146100ae57806302c6cc6a146100c35780630c340a24146101075780632db8c1291461011a5780635c975abb1461012d575b600080fd5b6100c16100bc36600461099d565b6101d6565b005b6100ea7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b6000546100ea906001600160a01b031681565b6100c16101283660046109d6565b610215565b60045461013a9060ff1681565b60405190151581526020016100fe565b61015d610158366004610a12565b61024f565b6040519081526020016100fe565b6100ea73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b6001546100ea906001600160a01b031681565b61013a6101a7366004610a5f565b6000546001600160a01b0391821691161490565b6100c161030d565b6100c16101d1366004610a5f565b610371565b6000546001600160a01b031633146102095760405162461bcd60e51b815260040161020090610a7a565b60405180910390fd5b610212816103a4565b50565b6000546001600160a01b0316331461023f5760405162461bcd60e51b815260040161020090610a7a565b61024a838383610431565b505050565b60405163139e4eb960e11b81526001600160a01b03858116600483015284811660248301526044820184905282811660648301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063273c9d7290608401604080518083038186803b1580156102cb57600080fd5b505afa1580156102df573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103039190610ab1565b5095945050505050565b6001546001600160a01b031633146103675760405162461bcd60e51b815260206004820181905260248201527f676f7665726e61626c652f6f6e6c792d70656e64696e672d676f7665726e6f726044820152606401610200565b61036f6105d3565b565b6000546001600160a01b0316331461039b5760405162461bcd60e51b815260040161020090610a7a565b61021281610623565b60045460ff16151581151514156103e95760405162461bcd60e51b81526020600482015260096024820152686e6f2d6368616e676560b81b6044820152606401610200565b6004805460ff19168215159081179091556040519081527f0e2fb031ee032dc02d8011dc50b816eb450cf856abd8261680dac74f72165bd2906020015b60405180910390a150565b6001600160a01b03831661049f5760405162461bcd60e51b815260206004820152602f60248201527f636f6c6c65637461626c652d647573742f63616e742d73656e642d647573742d60448201526e746f2d7a65726f2d6164647265737360881b6064820152608401610200565b6104aa6002836106e5565b1561050e5760405162461bcd60e51b815260206004820152602e60248201527f636f6c6c65637461626c652d647573742f746f6b656e2d69732d706172742d6f60448201526d198b5d1a194b5c1c9bdd1bd8dbdb60921b6064820152608401610200565b6001600160a01b03821673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee141561056f576040516001600160a01b0384169082156108fc029083906000818181858888f19350505050158015610569573d6000803e3d6000fd5b50610583565b6105836001600160a01b038316848361070a565b604080516001600160a01b038086168252841660208201529081018290527f1e34c1aee8e83c2dcc14c21bb4bfeea7f46c0c998cb797ac7cc4d7a18f5c656b9060600160405180910390a1505050565b60018054600080546001600160a01b03199081166001600160a01b0384161782559091169091556040517f7880f0fcc848e1f26e461654b100a69f8d0641e29aa29f6596c6afadbb36b5ea9190a1565b6001600160a01b0381166106975760405162461bcd60e51b815260206004820152603560248201527f676f7665726e61626c652f70656e64696e672d676f7665726e6f722d73686f756044820152746c642d6e6f742d62652d7a65726f2d61646472657360581b6064820152608401610200565b600180546001600160a01b0319166001600160a01b0383169081179091556040519081527f56bddfa0cee9697cebddf9acd7f23dc6583663b05e007b877056d05017994def90602001610426565b6001600160a01b038116600090815260018301602052604081205415155b9392505050565b604080516001600160a01b03848116602483015260448083018590528351808403909101815260649092018352602080830180516001600160e01b031663a9059cbb60e01b17905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65649084015261024a9286929160009161079a918516908490610817565b80519091501561024a57808060200190518101906107b89190610ad5565b61024a5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610200565b6060610826848460008561082e565b949350505050565b60608247101561088f5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610200565b843b6108dd5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610200565b600080866001600160a01b031685876040516108f99190610b22565b60006040518083038185875af1925050503d8060008114610936576040519150601f19603f3d011682016040523d82523d6000602084013e61093b565b606091505b509150915061094b828286610956565b979650505050505050565b60608315610965575081610703565b8251156109755782518084602001fd5b8160405162461bcd60e51b81526004016102009190610b3e565b801515811461021257600080fd5b6000602082840312156109af57600080fd5b81356107038161098f565b80356001600160a01b03811681146109d157600080fd5b919050565b6000806000606084860312156109eb57600080fd5b6109f4846109ba565b9250610a02602085016109ba565b9150604084013590509250925092565b60008060008060808587031215610a2857600080fd5b610a31856109ba565b9350610a3f602086016109ba565b925060408501359150610a54606086016109ba565b905092959194509250565b600060208284031215610a7157600080fd5b610703826109ba565b60208082526018908201527f676f7665726e61626c652f6f6e6c792d676f7665726e6f720000000000000000604082015260600190565b60008060408385031215610ac457600080fd5b505080516020909101519092909150565b600060208284031215610ae757600080fd5b81516107038161098f565b60005b83811015610b0d578181015183820152602001610af5565b83811115610b1c576000848401525b50505050565b60008251610b34818460208701610af2565b9190910192915050565b6020815260008251806020840152610b5d816040850160208701610af2565b601f01601f1916919091016040019291505056fea2646970667358221220bc02a23acb25d458b7b8bc08598e79ceed79d83c898ef5a66e90fac04506fc3a64736f6c63430008090033";

type Keep3rV2OracleFactoryWrapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Keep3rV2OracleFactoryWrapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Keep3rV2OracleFactoryWrapper__factory extends ContractFactory {
  constructor(...args: Keep3rV2OracleFactoryWrapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _keep3rV2OracleFactory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Keep3rV2OracleFactoryWrapper> {
    return super.deploy(
      _keep3rV2OracleFactory,
      overrides || {}
    ) as Promise<Keep3rV2OracleFactoryWrapper>;
  }
  getDeployTransaction(
    _keep3rV2OracleFactory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_keep3rV2OracleFactory, overrides || {});
  }
  attach(address: string): Keep3rV2OracleFactoryWrapper {
    return super.attach(address) as Keep3rV2OracleFactoryWrapper;
  }
  connect(signer: Signer): Keep3rV2OracleFactoryWrapper__factory {
    return super.connect(signer) as Keep3rV2OracleFactoryWrapper__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Keep3rV2OracleFactoryWrapperInterface {
    return new utils.Interface(_abi) as Keep3rV2OracleFactoryWrapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Keep3rV2OracleFactoryWrapper {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as Keep3rV2OracleFactoryWrapper;
  }
}
