import { CommonInterface } from "@interface/common.interface";
export namespace VcsInterface {
    export interface ICreateCredentialArg {
        context: string;
        credName: string;
        issuerDid: string;
        statusInfo: CommonInterface.IdTypeInterface;
        schemaInfo: CommonInterface.IdTypeInterface;
        vcId?: string;
        issueDate?: string;
        expireDate?: string;
    }

    export interface IEncryptCs {
        key: string[];
        credentialSubject: Object;
    }

    export interface IIssueVcArg {
        cred: ICredential;
        contextUrl: string;
        signKey: CommonInterface.LDKeyPair;
    }

    export interface IVerifyVcArg {
        signedVc: IVerifiableCredential;
        contextUrl: string;
        verifyKey: CommonInterface.LDKeyPair;
    }

    export interface ICredential {
        "@context": string[];
        id: string;
        type: string[];
        issuer: string;
        issuanceDate: string;
        expirationDate: string;
        credentialSubject: Object;
        credentialStatus: CommonInterface.IdTypeInterface;
        credentialSchema: CommonInterface.IdTypeInterface;
    }

    export interface IVerifiableCredential {
        "@context": string[];
        id: string;
        type: string[];
        issuer: string;
        issuanceDate: string;
        expirationDate: string;
        credentialSubject: Object;
        credentialStatus: CommonInterface.IdTypeInterface;
        credentialSchema: CommonInterface.IdTypeInterface;
        proof: CommonInterface.IProof;
    }
}
