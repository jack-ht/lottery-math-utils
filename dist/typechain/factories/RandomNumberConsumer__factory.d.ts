import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RandomNumberConsumer } from "../RandomNumberConsumer";
export declare class RandomNumberConsumer__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_vrfCoordinator: string, _link: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<RandomNumberConsumer>;
    getDeployTransaction(_vrfCoordinator: string, _link: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): RandomNumberConsumer;
    connect(signer: Signer): RandomNumberConsumer__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): RandomNumberConsumer;
}
