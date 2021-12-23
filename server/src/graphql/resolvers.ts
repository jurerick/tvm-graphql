import { TvmPropertiesDesc, TvmObject, TvmProperties } from "../tvmProperties";

const defaultPropValues = {
    pf: 1, // 1yr payment frequency
    cf: 1, // 1yr compounding frequency
    pmt: 0 // 0 payment
};

export const resolvers = {
  Query: {
    tvmProperties: () => TvmPropertiesDesc,
  },

  Mutation: {
    computePv: (
      _root: undefined,
      { properties }: { properties: TvmProperties },
      { tvm }: { tvm: TvmObject }
    ): number => {
      properties = Object.assign(properties, defaultPropValues);
      return tvm.calcPV(properties);
    },
    computeFv: (
      _root: undefined,
      { properties }: { properties: TvmProperties },
      { tvm }: { tvm: TvmObject }
    ): number => {
      properties = Object.assign(properties, defaultPropValues);
      return tvm.calcFV(properties);
    },
    computeInterestRate: (
        _root: undefined,
        { properties }: { properties: TvmProperties },
        { tvm }: { tvm: TvmObject }
      ): number => {
        properties = Object.assign(properties, defaultPropValues);
        return tvm.calcInterestRate(properties);
    },
    computeNper: (
        _root: undefined,
        { properties }: { properties: TvmProperties },
        { tvm }: { tvm: TvmObject }
      ): number => {
        properties = Object.assign(properties, defaultPropValues);
        return tvm.calcNPer(properties);
    },
  },
};
