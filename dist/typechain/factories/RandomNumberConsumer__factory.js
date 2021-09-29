"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomNumberConsumer__factory = void 0;
const ethers_1 = require("ethers");
class RandomNumberConsumer__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_vrfCoordinator, _link, _governance, overrides) {
        return super.deploy(_vrfCoordinator, _link, _governance, overrides || {});
    }
    getDeployTransaction(_vrfCoordinator, _link, _governance, overrides) {
        return super.getDeployTransaction(_vrfCoordinator, _link, _governance, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.RandomNumberConsumer__factory = RandomNumberConsumer__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_vrfCoordinator",
                type: "address",
            },
            {
                internalType: "address",
                name: "_link",
                type: "address",
            },
            {
                internalType: "address",
                name: "_governance",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "lotteryId",
                type: "uint256",
            },
        ],
        name: "getLotteryNumber",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getRandomNumber",
        outputs: [
            {
                internalType: "bytes32",
                name: "requestId",
                type: "bytes32",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "governance",
        outputs: [
            {
                internalType: "contract ILottoGovernance",
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
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        name: "nonces",
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
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "randomResults",
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
                internalType: "bytes32",
                name: "requestId",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "randomness",
                type: "uint256",
            },
        ],
        name: "rawFulfillRandomness",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        name: "requestIds",
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
                internalType: "bytes32",
                name: "_keyHash",
                type: "bytes32",
            },
            {
                internalType: "uint256",
                name: "_fee",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_seed",
                type: "uint256",
            },
        ],
        name: "requestRandomness",
        outputs: [
            {
                internalType: "bytes32",
                name: "requestId",
                type: "bytes32",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50604051610d54380380610d548339818101604052606081101561003357600080fd5b81019080805190602001909291908051906020019092919080519060200190929190505050828281600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050507f2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c131160001b60048190555067016345785d8a000060058190555080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050610beb806101696000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80639e317f121161005b5780639e317f1214610193578063b0d36340146101d5578063dbdff2c114610203578063dc6cfe101461022157610088565b8063219be1141461008d5780635aa6e675146100cf5780638645f7a81461011957806394985ddd1461015b575b600080fd5b6100b9600480360360208110156100a357600080fd5b8101908080359060200190929190505050610277565b6040518082815260200191505060405180910390f35b6100d761028f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101456004803603602081101561012f57600080fd5b81019080803590602001909291905050506102b5565b6040518082815260200191505060405180910390f35b6101916004803603604081101561017157600080fd5b8101908080359060200190929190803590602001909291905050506102cd565b005b6101bf600480360360208110156101a957600080fd5b810190808035906020019092919050505061039e565b6040518082815260200191505060405180910390f35b610201600480360360208110156101eb57600080fd5b81019080803590602001909291905050506103b6565b005b61020b6105ac565b6040518082815260200191505060405180910390f35b6102616004803603606081101561023757600080fd5b810190808035906020019092919080359060200190929190803590602001909291905050506106fa565b6040518082815260200191505060405180910390f35b60066020528060005260406000206000915090505481565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60076020528060005260406000206000915090505481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610390576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f4f6e6c7920565246436f6f7264696e61746f722063616e2066756c66696c6c0081525060200191505060405180910390fd5b61039a828261090b565b5050565b60026020528060005260406000206000915090505481565b600060066000838152602001908152602001600020541461043f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f616c72656164792d666f756e642d72616e646f6d00000000000000000000000081525060200191505060405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ba13a5726040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156104c057600080fd5b505af11580156104d4573d6000803e3d6000fd5b505050506040513d60208110156104ea57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff1614610584576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f6e6f742d6c6f74746572792d616464726573730000000000000000000000000081525060200191505060405180910390fd5b600061058e6105ac565b90508160076000838152602001908152602001600020819055505050565b60006005546000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561064f57600080fd5b505afa158015610663573d6000803e3d6000fd5b505050506040513d602081101561067957600080fd5b8101908080519060200190929190505050116106e0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180610b8b602b913960400191505060405180910390fd5b60004290506106f4600454600554836106fa565b91505090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634000aea0600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1685878660405160200180838152602001828152602001925050506040516020818303038152906040526040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561080c5780820151818401526020810190506107f1565b50505050905090810190601f1680156108395780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b15801561085a57600080fd5b505af115801561086e573d6000803e3d6000fd5b505050506040513d602081101561088457600080fd5b81019080805190602001909291905050505060006108b7858430600260008a815260200190815260200160002054610a4f565b90506108e060016002600088815260200190815260200160002054610ac990919063ffffffff16565b60026000878152602001908152602001600020819055506109018582610b51565b9150509392505050565b600060076000848152602001908152602001600020549050816006600083815260200190815260200160002081905550600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ba13a5726040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156109a557600080fd5b505af11580156109b9573d6000803e3d6000fd5b505050506040513d60208110156109cf57600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff16630aebeb4e836040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015610a3257600080fd5b505af1158015610a46573d6000803e3d6000fd5b50505050505050565b600084848484604051602001808581526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019450505050506040516020818303038152906040528051906020012060001c9050949350505050565b600080828401905083811015610b47576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b6000828260405160200180838152602001828152602001925050506040516020818303038152906040528051906020012090509291505056fe4e6f7420656e6f756768204c494e4b202d2066696c6c20636f6e7472616374207769746820666175636574a26469706673582212208bce93bf948245cd87c40cd62aa47e533de410cc2719b76dbd15609787d5c37964736f6c63430006080033";
//# sourceMappingURL=RandomNumberConsumer__factory.js.map