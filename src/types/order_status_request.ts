import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface IOrderStatusRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. LastMsgSeqNumProcessed.369
  ClOrdID: string// [2] 11 (String)
  Side?: string// [3] 54 (String)
  StandardTrailer: IStandardTrailer// [4] SignatureLength.93, Signature.89, CheckSum.10
}
