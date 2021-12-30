/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TendV2DetachedJob,
  TendV2DetachedJobInterface,
} from "../TendV2DetachedJob";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_baseFeeOracle",
        type: "address",
      },
      {
        internalType: "address",
        name: "_mechanicsRegistry",
        type: "address",
      },
      {
        internalType: "address",
        name: "_yOracle",
        type: "address",
      },
      {
        internalType: "address",
        name: "_v2Keeper",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_workCooldown",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "MultiplierExceedsMax",
    type: "error",
  },
  {
    inputs: [],
    name: "NotWorkable",
    type: "error",
  },
  {
    inputs: [],
    name: "NotZero",
    type: "error",
  },
  {
    inputs: [],
    name: "RequiredAmountsDifferentLength",
    type: "error",
  },
  {
    inputs: [],
    name: "StrategyAlreadyAdded",
    type: "error",
  },
  {
    inputs: [],
    name: "StrategyNotAdded",
    type: "error",
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
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_strategy",
        type: "address",
      },
    ],
    name: "ForceWorked",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_strategy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_requiredAmount",
        type: "uint256",
      },
    ],
    name: "StrategyAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_strategy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_requiredAmount",
        type: "uint256",
      },
    ],
    name: "StrategyModified",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_strategy",
        type: "address",
      },
    ],
    name: "StrategyRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_strategy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_keeper",
        type: "address",
      },
    ],
    name: "Worked",
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
    name: "WETH",
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
        internalType: "address[]",
        name: "_strategies",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_requiredAmounts",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "_costTokens",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "_costPairs",
        type: "address[]",
      },
    ],
    name: "addStrategies",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_strategy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_requiredAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_costToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_costPair",
        type: "address",
      },
    ],
    name: "addStrategy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "baseFeeOracle",
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
        name: "",
        type: "address",
      },
    ],
    name: "costPair",
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
        name: "",
        type: "address",
      },
    ],
    name: "costToken",
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
        name: "_strategy",
        type: "address",
      },
    ],
    name: "forceWork",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "_mechanic",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "lastWorkAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mechanicsRegistry",
    outputs: [
      {
        internalType: "address",
        name: "_mechanicRegistry",
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
        name: "_strategy",
        type: "address",
      },
    ],
    name: "removeStrategy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "requiredAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
        name: "_mechanicsRegistry",
        type: "address",
      },
    ],
    name: "setMechanicsRegistry",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_v2Keeper",
        type: "address",
      },
    ],
    name: "setV2Keep3r",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_workCooldown",
        type: "uint256",
      },
    ],
    name: "setWorkCooldown",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_yOracle",
        type: "address",
      },
    ],
    name: "setYOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "strategies",
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
    inputs: [
      {
        internalType: "address",
        name: "_strategy",
        type: "address",
      },
      {
        internalType: "address",
        name: "_costToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_costPair",
        type: "address",
      },
    ],
    name: "updateCostTokenAndPair",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_strategy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_requiredAmount",
        type: "uint256",
      },
    ],
    name: "updateRequiredAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_strategies",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_requiredAmounts",
        type: "uint256[]",
      },
    ],
    name: "updateRequiredAmounts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "v2Keeper",
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
        name: "_strategy",
        type: "address",
      },
    ],
    name: "work",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "workCooldown",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_strategy",
        type: "address",
      },
    ],
    name: "workable",
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
    name: "yOracle",
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

const _bytecode =
  "0x60a06040523480156200001157600080fd5b506040516200212a3803806200212a833981016040819052620000349162000192565b848484848483803380620000a55760405162461bcd60e51b815260206004820152602e60248201527f676f7665726e61626c652f676f7665726e6f722d73686f756c642d6e6f742d6260448201526d652d7a65726f2d6164647265737360901b606482015260840160405180910390fd5b600080546001600160a01b0319166001600160a01b039283161790556004805491831661010002610100600160a81b031990921691909117905550506001600160a01b0385166080526200011583600680546001600160a01b0319166001600160a01b0392909216919091179055565b600580546001600160a01b0319166001600160a01b03841617905580156200014257620001428162000152565b50505050505050505050620001f9565b8062000170576040516252b55360e31b815260040160405180910390fd5b600d55565b80516001600160a01b03811681146200018d57600080fd5b919050565b600080600080600060a08688031215620001ab57600080fd5b620001b68662000175565b9450620001c66020870162000175565b9350620001d66040870162000175565b9250620001e66060870162000175565b9150608086015190509295509295909350565b608051611f0e6200021c600039600081816103bd01526115410152611f0e6000f3fe608060405234801561001057600080fd5b50600436106102065760003560e01c8063826cddf61161011a578063d9f9027f116100ad578063e43581b81161007c578063e43581b8146104ce578063e58bb639146104f0578063ef47da6d146104f8578063f235757f1461050b578063fbea57091461051e57600080fd5b8063d9f9027f1461048a578063dd7ba4201461049f578063e06a7cb9146104b2578063e3056a34146104bb57600080fd5b8063a734f06e116100e9578063a734f06e14610418578063ad5c464814610433578063b80b534c1461044e578063b9a52e281461047757600080fd5b8063826cddf6146103b85780638e8c7d97146103df57806392b3b265146103f25780639f4713031461040557600080fd5b80632db8c1291161019d5780635c975abb1161016c5780635c975abb14610339578063623351e41461035657806365834acc1461037f57806374c2ca831461039257806382376a99146103a557600080fd5b80632db8c129146102ed57806336df7ea514610300578063371a49991461031357806348dcaddf1461032657600080fd5b8063175188e8116101d9578063175188e8146102945780632463cf7b146102a757806327891eba146102ba57806328584aa7146102cd57600080fd5b806302329a291461020b5780630c340a241461022057806310262803146102505780631078f3881461027e575b600080fd5b61021e6102193660046119af565b610531565b005b600054610233906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61027061025e3660046119e8565b600a6020526000908152604090205481565b604051908152602001610247565b60045461010090046001600160a01b0316610233565b61021e6102a23660046119e8565b610570565b61021e6102b5366004611a4f565b610636565b61021e6102c8366004611b13565b61074d565b6102706102db3660046119e8565b60096020526000908152604090205481565b61021e6102fb366004611b60565b610798565b61021e61030e3660046119e8565b6107d2565b61021e610321366004611b9c565b610817565b600654610233906001600160a01b031681565b6004546103469060ff1681565b6040519015158152602001610247565b6102336103643660046119e8565b600b602052600090815260409020546001600160a01b031681565b61034661038d3660046119e8565b61085b565b61021e6103a0366004611bdf565b6108eb565b61021e6103b33660046119e8565b61092d565b6102337f000000000000000000000000000000000000000000000000000000000000000081565b61021e6103ed3660046119e8565b610979565b600554610233906001600160a01b031681565b6103466104133660046119e8565b6109c1565b61023373eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b61023373c02aaa39b223fe8d0a0e5c4f27ead9083c756cc281565b61023361045c3660046119e8565b600c602052600090815260409020546001600160a01b031681565b61021e610485366004611bf8565b6109cc565b610492610a13565b6040516102479190611c22565b61021e6104ad3660046119e8565b610ac2565b610270600d5481565b600154610233906001600160a01b031681565b6103466104dc3660046119e8565b6000546001600160a01b0391821691161490565b61021e610b3d565b61021e6105063660046119e8565b610ba1565b61021e6105193660046119e8565b610bee565b61021e61052c366004611c6f565b610c21565b6000546001600160a01b031633146105645760405162461bcd60e51b815260040161055b90611cdb565b60405180910390fd5b61056d81610ce6565b50565b6000546001600160a01b031633148061058d575061058d3361085b565b6105a95760405162461bcd60e51b815260040161055b90611d12565b6105b4600782610d6c565b6105d157604051638716f5eb60e01b815260040160405180910390fd5b6001600160a01b0381166000908152600960205260408120556105f5600782610d91565b506040516001600160a01b03821681527f09a1db4b80c32706328728508c941a6b954f31eb5affd32f236c1fd405f8fea4906020015b60405180910390a150565b6000546001600160a01b031633148061065357506106533361085b565b61066f5760405162461bcd60e51b815260040161055b90611d12565b86851461068f5760405163d5ee508960e01b815260040160405180910390fd5b60005b87811015610742576107308989838181106106af576106af611d66565b90506020020160208101906106c491906119e8565b8888848181106106d6576106d6611d66565b905060200201358787858181106106ef576106ef611d66565b905060200201602081019061070491906119e8565b86868681811061071657610716611d66565b905060200201602081019061072b91906119e8565b610da6565b8061073a81611d92565b915050610692565b505050505050505050565b6000546001600160a01b031633148061076a575061076a3361085b565b6107865760405162461bcd60e51b815260040161055b90611d12565b61079284848484610da6565b50505050565b6000546001600160a01b031633146107c25760405162461bcd60e51b815260040161055b90611cdb565b6107cd838383610e36565b505050565b60045460ff161561080e5760405162461bcd60e51b81526020600482015260066024820152651c185d5cd95960d21b604482015260640161055b565b61056d81610fd8565b6000546001600160a01b031633148061083457506108343361085b565b6108505760405162461bcd60e51b815260040161055b90611d12565b6107cd838383611045565b60048054604051631960d2b360e21b81526001600160a01b0384811693820193909352600092610100909204909116906365834acc906024015b60206040518083038186803b1580156108ad57600080fd5b505afa1580156108c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e59190611dad565b92915050565b6000546001600160a01b031633148061090857506109083361085b565b6109245760405162461bcd60e51b815260040161055b90611d12565b61056d81611078565b6000546001600160a01b031633146109575760405162461bcd60e51b815260040161055b90611cdb565b600580546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146109a35760405162461bcd60e51b815260040161055b90611cdb565b600680546001600160a01b0319166001600160a01b03831617905550565b60006108e58261109a565b6000546001600160a01b03163314806109e957506109e93361085b565b610a055760405162461bcd60e51b815260040161055b90611d12565b610a0f82826110e7565b5050565b6060610a1f6007611170565b67ffffffffffffffff811115610a3757610a37611dca565b604051908082528060200260200182016040528015610a60578160200160208202803683370190505b50905060005b610a706007611170565b811015610abe57610a8260078261117a565b828281518110610a9457610a94611d66565b6001600160a01b039092166020928302919091019091015280610ab681611d92565b915050610a66565b5090565b6000546001600160a01b0316331480610adf5750610adf3361085b565b610afb5760405162461bcd60e51b815260040161055b90611d12565b610b0481611186565b6040516001600160a01b03821681527fee8d688761ac1d0fda49e2ac999f0e46b3beaf16857a8e8905aeab2987dc8d389060200161062b565b6001546001600160a01b03163314610b975760405162461bcd60e51b815260206004820181905260248201527f676f7665726e61626c652f6f6e6c792d70656e64696e672d676f7665726e6f72604482015260640161055b565b610b9f6111f6565b565b6000546001600160a01b03163314610bcb5760405162461bcd60e51b815260040161055b90611cdb565b60048054610100600160a81b0319166101006001600160a01b0384160217905550565b6000546001600160a01b03163314610c185760405162461bcd60e51b815260040161055b90611cdb565b61056d81611246565b6000546001600160a01b0316331480610c3e5750610c3e3361085b565b610c5a5760405162461bcd60e51b815260040161055b90611d12565b828114610c7a5760405163d5ee508960e01b815260040160405180910390fd5b60005b83811015610cdf57610ccd858583818110610c9a57610c9a611d66565b9050602002016020810190610caf91906119e8565b848484818110610cc157610cc1611d66565b905060200201356110e7565b80610cd781611d92565b915050610c7d565b5050505050565b60045460ff1615158115151415610d2b5760405162461bcd60e51b81526020600482015260096024820152686e6f2d6368616e676560b81b604482015260640161055b565b6004805460ff19168215159081179091556040519081527f0e2fb031ee032dc02d8011dc50b816eb450cf856abd8261680dac74f72165bd29060200161062b565b6001600160a01b038116600090815260018301602052604081205415155b9392505050565b6000610d8a836001600160a01b038416611308565b6001600160a01b0384166000908152600960205260409020839055610dcc8483836113fb565b604080516001600160a01b0386168152602081018590527f2f564a83158ad1831793ad3e69257b52f39ece5d49cb0d8746708ecb9ef964da910160405180910390a1610e1960078561143f565b6107925760405163165e236760e01b815260040160405180910390fd5b6001600160a01b038316610ea45760405162461bcd60e51b815260206004820152602f60248201527f636f6c6c65637461626c652d647573742f63616e742d73656e642d647573742d60448201526e746f2d7a65726f2d6164647265737360881b606482015260840161055b565b610eaf600283610d6c565b15610f135760405162461bcd60e51b815260206004820152602e60248201527f636f6c6c65637461626c652d647573742f746f6b656e2d69732d706172742d6f60448201526d198b5d1a194b5c1c9bdd1bd8dbdb60921b606482015260840161055b565b6001600160a01b03821673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1415610f74576040516001600160a01b0384169082156108fc029083906000818181858888f19350505050158015610f6e573d6000803e3d6000fd5b50610f88565b610f886001600160a01b0383168483611454565b604080516001600160a01b038086168252841660208201529081018290527f1e34c1aee8e83c2dcc14c21bb4bfeea7f46c0c998cb797ac7cc4d7a18f5c656b9060600160405180910390a1505050565b610fe18161109a565b610ffe57604051630efd608960e21b815260040160405180910390fd5b61100781611186565b604080516001600160a01b03831681523360208201527f6696222bb476e2b08ac3bf59d60b85b81ae8327ff2cf3efe73a02b7bf71c618c910161062b565b611050600784610d6c565b61106d57604051638716f5eb60e01b815260040160405180910390fd5b6107cd8383836113fb565b80611095576040516252b55360e31b815260040160405180910390fd5b600d55565b60006110a5826114a6565b6110b157506000919050565b816001600160a01b031663650d18806110c984611518565b6040518263ffffffff1660e01b815260040161089591815260200190565b6110f2600783610d6c565b61110f57604051638716f5eb60e01b815260040160405180910390fd5b6001600160a01b0382166000908152600960205260409020819055604080516001600160a01b0384168152602081018390527fe4471c38177bd412e0358beccddbe74bad9465520f4f24a76c013bd404b0b0de910160405180910390a15050565b60006108e5825490565b6000610d8a83836116de565b6001600160a01b038181166000818152600a602052604090819020429055600554905163d6d2dcf960e01b815260048101929092529091169063d6d2dcf990602401600060405180830381600087803b1580156111e257600080fd5b505af1158015610cdf573d6000803e3d6000fd5b60018054600080546001600160a01b03199081166001600160a01b0384161782559091169091556040517f7880f0fcc848e1f26e461654b100a69f8d0641e29aa29f6596c6afadbb36b5ea9190a1565b6001600160a01b0381166112ba5760405162461bcd60e51b815260206004820152603560248201527f676f7665726e61626c652f70656e64696e672d676f7665726e6f722d73686f756044820152746c642d6e6f742d62652d7a65726f2d61646472657360581b606482015260840161055b565b600180546001600160a01b0319166001600160a01b0383169081179091556040519081527f56bddfa0cee9697cebddf9acd7f23dc6583663b05e007b877056d05017994def9060200161062b565b600081815260018301602052604081205480156113f157600061132c600183611de0565b855490915060009061134090600190611de0565b90508181146113a557600086600001828154811061136057611360611d66565b906000526020600020015490508087600001848154811061138357611383611d66565b6000918252602080832090910192909255918252600188019052604090208390555b85548690806113b6576113b6611df7565b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506108e5565b60009150506108e5565b6001600160a01b039283166000908152600b6020908152604080832080549587166001600160a01b0319968716179055600c90915290208054919093169116179055565b6000610d8a836001600160a01b038416611708565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526107cd908490611757565b60006114b3600783610d6c565b6114d057604051638716f5eb60e01b815260040160405180910390fd5b600d5415806115035750600d546001600160a01b0383166000908152600a60205260409020546115009190611e0d565b42115b1561151057506001919050565b506000919050565b6001600160a01b03811660009081526009602052604081205461153d57506000919050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316639436dce46040518163ffffffff1660e01b815260040160206040518083038186803b15801561159857600080fd5b505afa1580156115ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115d09190611e25565b6001600160a01b0384166000908152600960205260409020546115f39190611e3e565b6001600160a01b038481166000908152600b60205260409020549192501661161b5792915050565b6006546001600160a01b038481166000908152600c6020908152604080832054600b90925291829020549151631100615360e31b8152908316600482015273c02aaa39b223fe8d0a0e5c4f27ead9083c756cc260248201526044810185905290821660648201529116906388030a989060840160206040518083038186803b1580156116a657600080fd5b505afa1580156116ba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d8a9190611e25565b60008260000182815481106116f5576116f5611d66565b9060005260206000200154905092915050565b600081815260018301602052604081205461174f575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556108e5565b5060006108e5565b60006117ac826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166118299092919063ffffffff16565b8051909150156107cd57808060200190518101906117ca9190611dad565b6107cd5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161055b565b60606118388484600085611840565b949350505050565b6060824710156118a15760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161055b565b843b6118ef5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161055b565b600080866001600160a01b0316858760405161190b9190611e89565b60006040518083038185875af1925050503d8060008114611948576040519150601f19603f3d011682016040523d82523d6000602084013e61194d565b606091505b509150915061195d828286611968565b979650505050505050565b60608315611977575081610d8a565b8251156119875782518084602001fd5b8160405162461bcd60e51b815260040161055b9190611ea5565b801515811461056d57600080fd5b6000602082840312156119c157600080fd5b8135610d8a816119a1565b80356001600160a01b03811681146119e357600080fd5b919050565b6000602082840312156119fa57600080fd5b610d8a826119cc565b60008083601f840112611a1557600080fd5b50813567ffffffffffffffff811115611a2d57600080fd5b6020830191508360208260051b8501011115611a4857600080fd5b9250929050565b6000806000806000806000806080898b031215611a6b57600080fd5b883567ffffffffffffffff80821115611a8357600080fd5b611a8f8c838d01611a03565b909a50985060208b0135915080821115611aa857600080fd5b611ab48c838d01611a03565b909850965060408b0135915080821115611acd57600080fd5b611ad98c838d01611a03565b909650945060608b0135915080821115611af257600080fd5b50611aff8b828c01611a03565b999c989b5096995094979396929594505050565b60008060008060808587031215611b2957600080fd5b611b32856119cc565b935060208501359250611b47604086016119cc565b9150611b55606086016119cc565b905092959194509250565b600080600060608486031215611b7557600080fd5b611b7e846119cc565b9250611b8c602085016119cc565b9150604084013590509250925092565b600080600060608486031215611bb157600080fd5b611bba846119cc565b9250611bc8602085016119cc565b9150611bd6604085016119cc565b90509250925092565b600060208284031215611bf157600080fd5b5035919050565b60008060408385031215611c0b57600080fd5b611c14836119cc565b946020939093013593505050565b6020808252825182820181905260009190848201906040850190845b81811015611c635783516001600160a01b031683529284019291840191600101611c3e565b50909695505050505050565b60008060008060408587031215611c8557600080fd5b843567ffffffffffffffff80821115611c9d57600080fd5b611ca988838901611a03565b90965094506020870135915080821115611cc257600080fd5b50611ccf87828801611a03565b95989497509550505050565b60208082526018908201527f676f7665726e61626c652f6f6e6c792d676f7665726e6f720000000000000000604082015260600190565b60208082526034908201527f4d616368696e6572793a3a6f6e6c79476f7665726e6f724f724d656368616e69604082015273319d34b73b30b634b216b6b9b396b9b2b73232b960611b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415611da657611da6611d7c565b5060010190565b600060208284031215611dbf57600080fd5b8151610d8a816119a1565b634e487b7160e01b600052604160045260246000fd5b600082821015611df257611df2611d7c565b500390565b634e487b7160e01b600052603160045260246000fd5b60008219821115611e2057611e20611d7c565b500190565b600060208284031215611e3757600080fd5b5051919050565b6000816000190483118215151615611e5857611e58611d7c565b500290565b60005b83811015611e78578181015183820152602001611e60565b838111156107925750506000910152565b60008251611e9b818460208701611e5d565b9190910192915050565b6020815260008251806020840152611ec4816040850160208701611e5d565b601f01601f1916919091016040019291505056fea2646970667358221220756f67fbcb88f1ceb70153d14cb178046411e647c79cfe125c5c8ffffe8d283d64736f6c63430008090033";

type TendV2DetachedJobConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TendV2DetachedJobConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TendV2DetachedJob__factory extends ContractFactory {
  constructor(...args: TendV2DetachedJobConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _baseFeeOracle: string,
    _mechanicsRegistry: string,
    _yOracle: string,
    _v2Keeper: string,
    _workCooldown: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TendV2DetachedJob> {
    return super.deploy(
      _baseFeeOracle,
      _mechanicsRegistry,
      _yOracle,
      _v2Keeper,
      _workCooldown,
      overrides || {}
    ) as Promise<TendV2DetachedJob>;
  }
  getDeployTransaction(
    _baseFeeOracle: string,
    _mechanicsRegistry: string,
    _yOracle: string,
    _v2Keeper: string,
    _workCooldown: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _baseFeeOracle,
      _mechanicsRegistry,
      _yOracle,
      _v2Keeper,
      _workCooldown,
      overrides || {}
    );
  }
  attach(address: string): TendV2DetachedJob {
    return super.attach(address) as TendV2DetachedJob;
  }
  connect(signer: Signer): TendV2DetachedJob__factory {
    return super.connect(signer) as TendV2DetachedJob__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TendV2DetachedJobInterface {
    return new utils.Interface(_abi) as TendV2DetachedJobInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TendV2DetachedJob {
    return new Contract(address, _abi, signerOrProvider) as TendV2DetachedJob;
  }
}
