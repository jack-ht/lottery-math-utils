import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { VRFConsumerBase } from "../VRFConsumerBase";
export declare class VRFConsumerBase__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): VRFConsumerBase;
}
