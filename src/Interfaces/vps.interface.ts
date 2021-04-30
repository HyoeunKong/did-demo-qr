import { CommonInterface } from "@interface/common.interface";
import { VcsInterface } from "@interface/vcs.interface";
export namespace VpsInterface {
    export interface ICrerateQrDataArg {
        selected: string[];
        keys: Object;
        vp: IVerifiablePresentation;
    }
    export interface ICreateQrData {
        keys: Object;
        vp: IVerifiablePresentation;
    }

    export interface IVerifyVpArg {
        signedVp: IVerifiablePresentation;
        contextUrl: string;
        verifyKey: CommonInterface.LDKeyPair;
    }

    export interface IIssueVpArg {
        presentation: IPresentation;
        contextUrl: string;
        signKey: CommonInterface.LDKeyPair;
        challenge: string;
    }

    export interface IPresentation {
        "@context": string[];
        type: string[];
        verifiableCredential: VcsInterface.IVerifiableCredential[];
        id: string;
        holder: string;
    }

    export interface IVerifiablePresentation {
        "@context": string[];
        type: string[];
        verifiableCredential: VcsInterface.IVerifiableCredential[];
        id: string;
        holder: string;
        proof: CommonInterface.IProof;
    }

    export interface ICreatePresentation {
        vpId: string;
        holder: string;
        vc: VcsInterface.IVerifiableCredential[];
    }
}
