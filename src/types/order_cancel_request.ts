import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface IOrderCancelRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. LastMsgSeqNumProcessed.369
  OrigClOrdID: string// [2] 41 (String)
  OrderID?: string// [3] 37 (String)
  ClOrdID: string// [4] 11 (String)
  StandardTrailer: IStandardTrailer// [5] SignatureLength.93, Signature.89, CheckSum.10
}
