import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ILotto } from "../ILotto";
export declare class ILotto__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ILotto;
}
