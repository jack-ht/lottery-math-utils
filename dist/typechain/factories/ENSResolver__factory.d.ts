import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ENSResolver } from "../ENSResolver";
export declare class ENSResolver__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ENSResolver;
}
