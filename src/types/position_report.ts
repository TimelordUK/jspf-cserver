import { IStandardHeader } from './set/standard_header'
import { IPositionQty } from './set/position_qty'
import { IStandardTrailer } from './set/standard_trailer'

export interface IPositionReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. LastMsgSeqNumProcessed.369
  PosReqID: string// [2] 710 (String)
  PosMaintRptID?: string// [3] 721 (String)
  TotalNumPosReports: number// [4] 727 (Int)
  PosReqResult: number// [5] 728 (Int)
  Symbol?: string// [6] 55 (String)
  PositionQty?: IPositionQty// [7] NoPositions.702, LongQty.704, ShortQty.705
  SettlPrice?: number// [8] 730 (Float)
  AbsoluteTP?: number// [9] 1000 (Float)
  AbsoluteSL?: number// [10] 1002 (Float)
  TrailingSL?: boolean// [11] 1004 (Boolean)
  TriggerMethodSL?: number// [12] 1005 (Int)
  GuaranteedSL?: boolean// [13] 1006 (Boolean)
  StandardTrailer: IStandardTrailer// [14] SignatureLength.93, Signature.89, CheckSum.10
}
