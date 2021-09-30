"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lotto__factory = void 0;
const ethers_1 = require("ethers");
class Lotto__factory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(_governance, _link, _alarmOracle, overrides) {
        return super.deploy(_governance, _link, _alarmOracle, overrides || {});
    }
    getDeployTransaction(_governance, _link, _alarmOracle, overrides) {
        return super.getDeployTransaction(_governance, _link, _alarmOracle, overrides || {});
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
exports.Lotto__factory = Lotto__factory;
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_governance",
                type: "address",
            },
            {
                internalType: "address",
                name: "_link",
                type: "address",
            },
            {
                internalType: "address",
                name: "_alarmOracle",
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
                indexed: true,
                internalType: "bytes32",
                name: "id",
                type: "bytes32",
            },
        ],
        name: "ChainlinkCancelled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "id",
                type: "bytes32",
            },
        ],
        name: "ChainlinkFulfilled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "id",
                type: "bytes32",
            },
        ],
        name: "ChainlinkRequested",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "_id",
                type: "uint256",
            },
        ],
        name: "Close",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "_id",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_from",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_duration",
                type: "uint256",
            },
        ],
        name: "Open",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "_id",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_from",
                type: "address",
            },
        ],
        name: "PlayerJoined",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "_id",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_randomness",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_index",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "_from",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "Winner",
        type: "event",
    },
    {
        inputs: [],
        name: "MINIMUM",
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
        name: "ORACLE_PAYMENT",
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
        name: "RANDOMRESULT",
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
                name: "randomness",
                type: "uint256",
            },
        ],
        name: "close",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "data",
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
        ],
        name: "fulfill",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getAlarmAddress",
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
        name: "getAlarmJobId",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getChainlinkToken",
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
        name: "getLotteryAmount",
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
                name: "_player",
                type: "address",
            },
        ],
        name: "getPlayer",
        outputs: [
            {
                internalType: "address payable",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getPlayerCount",
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
        name: "getPlayers",
        outputs: [
            {
                internalType: "address payable[]",
                name: "",
                type: "address[]",
            },
        ],
        stateMutability: "view",
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
        inputs: [],
        name: "id",
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
        name: "isClosed",
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
        name: "isFinished",
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
        name: "isOpen",
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
        name: "join",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "duration",
                type: "uint256",
            },
        ],
        name: "open",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
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
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "players",
        outputs: [
            {
                internalType: "address payable",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x6080604052600160045566038d7ea4c68000600a55670de0b6b3a7640000600b557f3737383633336566313838383436393261646331666539353932313037393537600d556000600f553480156200005657600080fd5b506040516200250d3803806200250d833981810160405260608110156200007c57600080fd5b810190808051906020019092919080519060200190929190805190602001909291905050506000620000b36200026860201b60201c565b905080600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200019e57620001986200027060201b60201c565b620001b0565b620001af826200031a60201b60201c565b5b82600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600f819055506001601160006101000a81548160ff021916908360028111156200021957fe5b021790555080600c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050506200035e565b600033905090565b6200031873c89bd4e1632d3a43cb03aaad5262cbe4038bc57173ffffffffffffffffffffffffffffffffffffffff166338cc48316040518163ffffffff1660e01b815260040160206040518083038186803b158015620002cf57600080fd5b505afa158015620002e4573d6000803e3d6000fd5b505050506040513d6020811015620002fb57600080fd5b81019080805190602001909291905050506200031a60201b60201c565b565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b61219f806200036e6000396000f3fe60806040526004361061014b5760003560e01c80638b5b9ccc116100b6578063af640d0f1161006f578063af640d0f146105d1578063b688a363146105fc578063c2b6b58c14610606578063c2e5220614610635578063f2fde38b14610660578063f71d96cb146106b15761014b565b80638b5b9ccc146104625780638da5cb5b146104ce5780639c484b5c14610525578063a1fd4b3414610550578063a537e19d1461057b578063aeca2140146105a65761014b565b80635c12cd4b116101085780635c12cd4b146102fa578063690e7c091461038b578063715018a6146103c657806373d4a13a146103dd5780637b352962146104085780638732ed57146104375761014b565b80630aebeb4e146101505780630fe15c5e1461018b578063165d35e1146101e257806347535d7b146102395780635508ff94146102685780635aa6e675146102a3575b600080fd5b34801561015c57600080fd5b506101896004803603602081101561017357600080fd5b810190808035906020019092919050505061072c565b005b34801561019757600080fd5b506101a0610a17565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101ee57600080fd5b506101f7610a41565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561024557600080fd5b5061024e610a50565b604051808215151515815260200191505060405180910390f35b34801561027457600080fd5b506102a16004803603602081101561028b57600080fd5b8101908080359060200190929190505050610a7f565b005b3480156102af57600080fd5b506102b8610d5f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561030657600080fd5b506103496004803603602081101561031d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d85565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561039757600080fd5b506103c4600480360360208110156103ae57600080fd5b8101908080359060200190929190505050610e0a565b005b3480156103d257600080fd5b506103db610fa4565b005b3480156103e957600080fd5b506103f2611114565b6040518082815260200191505060405180910390f35b34801561041457600080fd5b5061041d61111a565b604051808215151515815260200191505060405180910390f35b34801561044357600080fd5b5061044c611149565b6040518082815260200191505060405180910390f35b34801561046e57600080fd5b50610477611153565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156104ba57808201518184015260208101905061049f565b505050509050019250505060405180910390f35b3480156104da57600080fd5b506104e36111e1565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561053157600080fd5b5061053a61120b565b6040518082815260200191505060405180910390f35b34801561055c57600080fd5b50610565611211565b6040518082815260200191505060405180910390f35b34801561058757600080fd5b50610590611217565b6040518082815260200191505060405180910390f35b3480156105b257600080fd5b506105bb61121f565b6040518082815260200191505060405180910390f35b3480156105dd57600080fd5b506105e6611225565b6040518082815260200191505060405180910390f35b61060461122b565b005b34801561061257600080fd5b5061061b61136b565b604051808215151515815260200191505060405180910390f35b34801561064157600080fd5b5061064a61139b565b6040518082815260200191505060405180910390f35b34801561066c57600080fd5b506106af6004803603602081101561068357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506113a8565b005b3480156106bd57600080fd5b506106ea600480360360208110156106d457600080fd5b810190808035906020019092919050505061159d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600280600281111561073a57fe5b601160009054906101000a900460ff16600281111561075557fe5b146107ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602781526020018061211b6027913960400191505060405180910390fd5b60008211610821576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f72616e646f6d2d6e6f742d666f756e640000000000000000000000000000000081525060200191505060405180910390fd5b6000600780549050838161083157fe5b06905060004790506007828154811061084657fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156108b6573d6000803e3d6000fd5b50600782815481106108c457fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f318c439a1352bef364f5056683fd70dba6a5052051c7d4d4bb8e2690b2422469600f548685856040518085815260200184815260200183815260200182815260200194505050505060405180910390a2600067ffffffffffffffff8111801561096e57600080fd5b5060405190808252806020026020018201604052801561099d5781602001602082028036833780820191505090505b50600790805190602001906109b3929190611f7d565b506001601160006101000a81548160ff021916908360028111156109d357fe5b02179055507fbf67515a38ee520223d32c1266d52101c30d936ed1f3e436c8caeb0a43cb06bf600f546040518082815260200191505060405180910390a150505050565b6000600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000610a4b6115d9565b905090565b6000806002811115610a5e57fe5b601160009054906101000a900460ff166002811115610a7957fe5b14905090565b6000806002811115610a8d57fe5b601160009054906101000a900460ff166002811115610aa857fe5b14610afe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602781526020018061211b6027913960400191505060405180910390fd5b816005600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610bb6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806121426028913960400191505060405180910390fd5b6005600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055807f7cc135e0cebb02c3480ae5d74d377283180a2601f8f644edf7987b009316c63a60405160405180910390a26002601160006101000a81548160ff02191690836002811115610c3857fe5b0217905550600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663360131896040518163ffffffff1660e01b8152600401602060405180830381600087803b158015610ca757600080fd5b505af1158015610cbb573d6000803e3d6000fd5b505050506040513d6020811015610cd157600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff1663b0d36340600f546040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b158015610d3657600080fd5b505af1158015610d4a573d6000803e3d6000fd5b505050506001600f5401600f81905550505050565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060078181548110610dd757fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16915050919050565b6001806002811115610e1857fe5b601160009054906101000a900460ff166002811115610e3357fe5b14610e89576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602781526020018061211b6027913960400191505060405180910390fd5b610e91612007565b610ea5600d5430635508ff9460e01b611603565b9050610ef36040518060400160405280600581526020017f756e74696c000000000000000000000000000000000000000000000000000000815250844201836116349092919063ffffffff16565b610f22600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1682600b54611667565b506000601160006101000a81548160ff02191690836002811115610f4257fe5b02179055503373ffffffffffffffffffffffffffffffffffffffff167f3782a13b1c01b7c9065c8d8d3eec7612ab764556c52731b7d1586917631659c7600f5485604051808381526020018281526020019250505060405180910390a2505050565b610fac61191f565b73ffffffffffffffffffffffffffffffffffffffff16610fca6111e1565b73ffffffffffffffffffffffffffffffffffffffff1614611053576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60105481565b600060028081111561112857fe5b601160009054906101000a900460ff16600281111561114357fe5b14905090565b6000600d54905090565b606060078054806020026020016040519081016040528092919081815260200182805480156111d757602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161118d575b5050505050905090565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600a5481565b600b5481565b600047905090565b600e5481565b600f5481565b600080600281111561123957fe5b601160009054906101000a900460ff16600281111561125457fe5b146112aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602781526020018061211b6027913960400191505060405180910390fd5b600a5434146112b557fe5b6007339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff167f87969bc7faf902221a147b95ceba76e011c5efb0339a0a8ee7a2bb82d9cfbbd6600f546040518082815260200191505060405180910390a250565b60006001600281111561137a57fe5b601160009054906101000a900460ff16600281111561139557fe5b14905090565b6000600780549050905090565b6113b061191f565b73ffffffffffffffffffffffffffffffffffffffff166113ce6111e1565b73ffffffffffffffffffffffffffffffffffffffff1614611457576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156114dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806120d26026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600781815481106115aa57fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61160b612007565b611613612007565b61162a85858584611927909392919063ffffffff16565b9150509392505050565b61164b8284608001516119d790919063ffffffff16565b6116628184608001516119fc90919063ffffffff16565b505050565b600030600454604051602001808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b815260140182815260200192505050604051602081830303815290604052805190602001209050600454836060018181525050836005600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550807fb5e6e01e79f91267dc17b4e6314d5d4d03593d2ceee0fbb452b750bd70ea5af960405160405180910390a2600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634000aea0858461179f87611a0c565b6040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561182657808201518184015260208101905061180b565b50505050905090810190601f1680156118535780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b15801561187457600080fd5b505af1158015611888573d6000803e3d6000fd5b505050506040513d602081101561189e57600080fd5b8101908080519060200190929190505050611904576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806120f86023913960400191505060405180910390fd5b60016004600082825401925050819055508090509392505050565b600033905090565b61192f612007565b61193f8560800151610100611bd8565b508385600001818152505082856020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508185604001907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681525050849050949350505050565b6119e48260038351611c2c565b6119f78183611d7190919063ffffffff16565b505050565b611a0882600083611c2c565b5050565b6060634042994660e01b60008084600001518560200151866040015187606001516001896080015160000151604051602401808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018881526020018781526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611b3b578082015181840152602081019050611b20565b50505050905090810190601f168015611b685780820380516001836020036101000a031916815260200191505b509950505050505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050509050919050565b611be0612074565b600060208381611bec57fe5b0614611c055760208281611bfc57fe5b06602003820191505b81836020018181525050604051808452600081528281016020016040525082905092915050565b60178111611c5957611c538160058460ff16901b60ff161784611d9390919063ffffffff16565b50611d6c565b60ff8111611c9b57611c7e601860058460ff16901b1784611d9390919063ffffffff16565b50611c9581600185611db39092919063ffffffff16565b50611d6b565b61ffff8111611cde57611cc1601960058460ff16901b1784611d9390919063ffffffff16565b50611cd881600285611db39092919063ffffffff16565b50611d6a565b63ffffffff8111611d2357611d06601a60058460ff16901b1784611d9390919063ffffffff16565b50611d1d81600485611db39092919063ffffffff16565b50611d69565b67ffffffffffffffff8111611d6857611d4f601b60058460ff16901b1784611d9390919063ffffffff16565b50611d6681600885611db39092919063ffffffff16565b505b5b5b5b5b505050565b611d79612074565b611d8b83846000015151848551611dd5565b905092915050565b611d9b612074565b611dab8384600001515184611e8e565b905092915050565b611dbb612074565b611dcc848560000151518585611edc565b90509392505050565b611ddd612074565b8251821115611deb57600080fd5b84602001518285011115611e1657611e15856002611e0f8860200151888701611f3d565b02611f59565b5b600080865180518760208301019350808887011115611e355787860182525b60208701925050505b60208410611e615780518252602082019150602081019050602084039350611e3e565b60006001856020036101000a03905080198251168184511681811785525050879350505050949350505050565b611e96612074565b83602001518310611eb357611eb2846002866020015102611f59565b5b8351805160208583010184815381861415611ecf576001820183525b5050508390509392505050565b611ee4612074565b84602001518483011115611f0257611f0185600286850102611f59565b5b60006001836101000a0390508551838682010185831982511617815281518588011115611f2f5784870182525b505085915050949350505050565b600081831115611f4f57829050611f53565b8190505b92915050565b606082600001519050611f6c8383611bd8565b50611f778382611d71565b50505050565b828054828255906000526020600020908101928215611ff6579160200282015b82811115611ff55782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555091602001919060010190611f9d565b5b509050612003919061208e565b5090565b6040518060a0016040528060008019168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526020016000815260200161206e612074565b81525090565b604051806040016040528060608152602001600081525090565b6120ce91905b808211156120ca57600081816101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905550600101612094565b5090565b9056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373756e61626c6520746f207472616e73666572416e6443616c6c20746f206f7261636c6546756e6374696f6e2063616e6e6f742062652063616c6c656420617420746869732074696d652e536f75726365206d75737420626520746865206f7261636c65206f66207468652072657175657374a2646970667358221220edb1b3f2756f63180d3190f5bc1392260adada0fd93111bf819f3567a60c947f64736f6c63430006080033";
//# sourceMappingURL=Lotto__factory.js.map