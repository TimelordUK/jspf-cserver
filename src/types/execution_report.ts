import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface IExecutionReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. LastMsgSeqNumProcessed.369
  OrderID: string// [2] 37 (String)
  ClOrdID?: string// [3] 11 (String)
  OrigClOrdID?: string// [4] 41 (String)
  TotNumReports?: number// [5] 911 (Int)
  ExecType: string// [6] 150 (String)
  OrdStatus: string// [7] 39 (String)
  Symbol?: string// [8] 55 (String)
  Side?: string// [9] 54 (String)
  OrderQty?: number// [10] 38 (Float)
  OrdType?: string// [11] 40 (String)
  Price?: number// [12] 44 (Float)
  StopPx?: number// [13] 99 (Float)
  TimeInForce?: string// [14] 59 (String)
  ExpireTime?: Date// [15] 126 (UtcTimestamp)
  LastQty?: number// [16] 32 (Float)
  LastPx?: number// [17] 31 (Float)
  LeavesQty?: number// [18] 151 (Float)
  CumQty?: number// [19] 14 (Float)
  AvgPx?: number// [20] 6 (Float)
  TransactTime?: Date// [21] 60 (UtcTimestamp)
  Text?: string// [22] 58 (String)
  OrdRejReason?: number// [23] 103 (Int)
  PosMaintRptID?: string// [24] 721 (String)
  Designation?: string// [25] 494 (String)
  MassStatusReqID?: string// [26] 584 (String)
  AbsoluteTP?: number// [27] 1000 (Float)
  RelativeTP?: number// [28] 1001 (Float)
  AbsoluteSL?: number// [29] 1002 (Float)
  RelativeSL?: number// [30] 1003 (Float)
  TrailingSL?: boolean// [31] 1004 (Boolean)
  TriggerMethodSL?: number// [32] 1005 (Int)
  GuaranteedSL?: boolean// [33] 1006 (Boolean)
  StandardTrailer: IStandardTrailer// [34] SignatureLength.93, Signature.89, CheckSum.10
}
