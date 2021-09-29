import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IRandomNumberConsumer } from "../IRandomNumberConsumer";
export declare class IRandomNumberConsumer__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): IRandomNumberConsumer;
}
