import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface IOrderCancelReject {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. LastMsgSeqNumProcessed.369
  OrderID: string// [2] 37 (String)
  ClOrdID: string// [3] 11 (String)
  OrigClOrdID?: string// [4] 41 (String)
  OrdStatus: string// [5] 39 (String)
  CxlRejResponseTo: string// [6] 434 (String)
  Text?: string// [7] 58 (String)
  StandardTrailer: IStandardTrailer// [8] SignatureLength.93, Signature.89, CheckSum.10
}
