import { CommonInterface } from "@interface/common.interface";
export namespace SchemaInterface {
    export interface ICreateSchemaArg {
        issuerDid: string;
        rawSchema: CommonInterface.IdTypeInterface;
    }

    export interface ICheckSchemaArg {
        credentialSubject: Object;
        schemaUrl: string;
    }
    export interface ISchema {
        type: string;
        modelVersion: string;
        id: string;
        name: string;
        author: string;
        authored: string;
        $schema: string;
        description: string;
        schema: Object;
        proof?: CommonInterface.IProof;
    }
    export interface IFillSchemaArg {
        customSchema: ISchema;
        issuerDid: string;
        rawSchema: CommonInterface.IdTypeInterface;
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
