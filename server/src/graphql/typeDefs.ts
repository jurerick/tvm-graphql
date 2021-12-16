import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLFloat,
  GraphQLInt,
  GraphQLNonNull,
} from "graphql";


const TvmObject = new GraphQLObjectType({
  name: "TvmObject",
  fields: {
    pv: { type: GraphQLFloat },
    nper: { type: GraphQLInt },
    fv: { type: GraphQLFloat },
    pmt: { type: GraphQLFloat },
    rate: { type: GraphQLFloat },
    cf: { type: new GraphQLNonNull(GraphQLInt) }, // compounding frequency
    pf: { type: new GraphQLNonNull(GraphQLInt) }, // payment frequency
  },
});

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    tvmProperties: {
      type: TvmObject,
      resolve: () => {
        return {
          cf: 1,
          pf: 1
        };
      },
    },
  },
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    computePV: {
      type: GraphQLFloat,
      args: {
        fv: {type: GraphQLFloat},
        rate: {type: GraphQLFloat},
        nper: {type: GraphQLInt}
      },
      resolve: (_root: undefined, inputs: Record<string, unknown>, tvm) => {
        
        // return tvm.calcPV(inputs); // undefined calcPV()

        console.log(inputs);

        tvm.calcPv(inputs);

        return 100;
      },
    },
  },
});

export const schema = new GraphQLSchema({
  query,
  mutation,
});

// import { gql } from "apollo-server-express";

// export const typeDefs = gql`

//     type Inputs {
//         pv: Float!
//         nper: Int!
//         fv: Float!
//         pmt: Float!
//         rate: Float!
//         cf: Int!
//         pf: Int!
//     }

//     type Query {
//         inputs: Inputs!
//     }

//     type Mutation {
//         ComputePV (param: Inputs) : Inputs!
//     }
// `;
