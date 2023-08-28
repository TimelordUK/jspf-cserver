import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface IRequestForPositions {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. LastMsgSeqNumProcessed.369
  PosReqID: string// [2] 710 (String)
  PosMaintRptID?: string// [3] 721 (String)
  StandardTrailer: IStandardTrailer// [4] SignatureLength.93, Signature.89, CheckSum.10
}
