import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ENSInterface } from "../ENSInterface";
export declare class ENSInterface__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ENSInterface;
}
