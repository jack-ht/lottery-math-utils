import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Lotto } from "../Lotto";
export declare class Lotto__factory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(_governance: string, _link: string, _alarmOracle: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Lotto>;
    getDeployTransaction(_governance: string, _link: string, _alarmOracle: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Lotto;
    connect(signer: Signer): Lotto__factory;
    static connect(address: string, signerOrProvider: Signer | Provider): Lotto;
}
