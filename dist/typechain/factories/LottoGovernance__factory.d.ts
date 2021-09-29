import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LottoGovernance } from "../LottoGovernance";
export declare class LottoGovernance__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<LottoGovernance>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): LottoGovernance;
    connect(signer: Signer): LottoGovernance__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): LottoGovernance;
}
