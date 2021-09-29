import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ChainlinkRequestInterface } from "../ChainlinkRequestInterface";
export declare class ChainlinkRequestInterface__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ChainlinkRequestInterface;
}
