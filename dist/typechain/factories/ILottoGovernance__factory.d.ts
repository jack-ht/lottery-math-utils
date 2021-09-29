import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ILottoGovernance } from "../ILottoGovernance";
export declare class ILottoGovernance__factory {
    static connect(address: string, signerOrProvider: Signer | Provider): ILottoGovernance;
}
