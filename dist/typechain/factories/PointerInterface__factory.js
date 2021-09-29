"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointerInterface__factory = void 0;
const ethers_1 = require("ethers");
class PointerInterface__factory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.PointerInterface__factory = PointerInterface__factory;
const _abi = [
    {
        inputs: [],
        name: "getAddress",
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
//# sourceMappingURL=PointerInterface__factory.js.map