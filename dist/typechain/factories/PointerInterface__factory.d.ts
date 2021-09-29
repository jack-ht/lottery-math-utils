import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { PointerInterface } from "../PointerInterface";
export declare class PointerInterface__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): PointerInterface;
}
