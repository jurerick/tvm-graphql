import { gql } from "apollo-server-express";

export const typeDefs = gql`

    type TvmProperties {
        pv: String
        fv: String
        rate: String
        pmt: String
        nper: String
        pf: String
        cf: String
    }

    input TvmPropertiesInput {
        pv: Float
        fv: Float
        rate: Float
        pmt: Float
        nper: Int
        pf: Int
        cf: Int
    }
    

    type Query {
        tvmProperties: TvmProperties!
    }

    type Mutation {
        computePv(properties: TvmPropertiesInput): Float!
        computeFv(properties: TvmPropertiesInput): Float!
        computeInterestRate(properties: TvmPropertiesInput): Float!
        computeNper(properties: TvmPropertiesInput): Float!
    }
`;