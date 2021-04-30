import { VcsInterface } from "./vcs.interface";
import { SchemaInterface } from "./schema.interface";
export namespace CommonInterface {
    export interface IdTypeInterface {
        id: string;
        type: string;
    }

    export interface LDKeyPair {
        id: string;
        controller: string;
        type?: string;
        publicKeyBase58: string;
    }

    export interface IFillCredArg {
        cred: VcsInterface.ICredential;
        createCredArg: VcsInterface.ICreateCredentialArg;
    }

    export interface IAddProofArg {
        doc: SchemaInterface.ISchema;
        issuerDid: string;
        privateKey: string;
    }

    export interface IVerifyProof {
        obj: Object;
        publicKey: string;
    }

    export interface EcdsaSignature {
        r: string;
        s: string;
        recoveryParam?: number;
    }

    export interface IProof {
        type: string;
        created: string;
        jws: string;
        challenge?: string;
        proofPurpose: string;
        verificationMethod: string;
    }

    export interface ICallVerifyKeyArg {
        proof: IProof;
        signer: string;
    }

    export interface ICallSignKeyArg {
        keyType: string;
        signerDid: string;
        index?: number;
    }

    export interface ICallKeyInfo {
        signKey?: ICallSignKeyArg;
        verifyKey?: ICallVerifyKeyArg;
    }

    export interface ICCheckDateArg {
        date1: Date;
        date2: Date;
    }
}
