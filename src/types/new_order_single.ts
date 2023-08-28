import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface INewOrderSingle {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. LastMsgSeqNumProcessed.369
  ClOrdID: string// [2] 11 (String)
  Symbol: string// [3] 55 (String)
  Side: string// [4] 54 (String)
  TransactTime: Date// [5] 60 (UtcTimestamp)
  OrderQty: number// [6] 38 (Float)
  OrdType: string// [7] 40 (String)
  Price?: number// [8] 44 (Float)
  StopPx?: number// [9] 99 (Float)
  TimeInForce?: string// [10] 59 (String)
  ExpireTime?: Date// [11] 126 (UtcTimestamp)
  PosMaintRptID?: string// [12] 721 (String)
  Designation?: string// [13] 494 (String)
  StandardTrailer: IStandardTrailer// [14] SignatureLength.93, Signature.89, CheckSum.10
}
