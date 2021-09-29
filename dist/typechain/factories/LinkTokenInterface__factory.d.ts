import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { LinkTokenInterface } from "../LinkTokenInterface";
export declare class LinkTokenInterface__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): LinkTokenInterface;
}
