
interface TvmPropertiesDescriptions {
    pv: string;
    nper: string;
    fv: string;
    pmt: string;
    rate: string;
    cf?: string; // compounding frequency
    pf?: string; // payment frequency
}

export interface TvmProperties {
    pv: number
    fv: number
    rate: number
    pmt: number
    nper: number
    pf?: number
    cf?: number
}

export const TvmPropertiesDesc: TvmPropertiesDescriptions = {

    pv: "The present value of an investment.",
    fv: "The future value of an investment.",
    rate: "Interest rate.",
    nper: "The number of compounding periods per year",
    pmt: "Payment."
}

export interface TvmObject {
    calcPV(inputs: TvmProperties): number;
    calcFV(inputs: TvmProperties): number;
    calcInterestRate(inputs: TvmProperties): number;
    calcNPer(inputs: TvmProperties): number;
}
