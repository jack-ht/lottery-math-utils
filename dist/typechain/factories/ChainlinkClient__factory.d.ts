import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ChainlinkClient } from "../ChainlinkClient";
export declare class ChainlinkClient__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ChainlinkClient>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ChainlinkClient;
    connect(signer: Signer): ChainlinkClient__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): ChainlinkClient;
}
