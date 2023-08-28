import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface IOrderCancelReplaceRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. LastMsgSeqNumProcessed.369
  OrderID?: string// [2] 37 (String)
  OrigClOrdID: string// [3] 41 (String)
  ClOrdID: string// [4] 11 (String)
  OrderQty: number// [5] 38 (Float)
  Price?: number// [6] 44 (Float)
  StopPx?: number// [7] 99 (Float)
  ExpireTime?: Date// [8] 126 (UtcTimestamp)
  StandardTrailer: IStandardTrailer// [9] SignatureLength.93, Signature.89, CheckSum.10
}
