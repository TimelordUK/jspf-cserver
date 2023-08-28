import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

export interface IOrderMassStatusRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. LastMsgSeqNumProcessed.369
  MassStatusReqID: string// [2] 584 (String)
  MassStatusReqType: number// [3] 585 (Int)
  IssueDate?: Date// [4] 225 (LocalDate)
  StandardTrailer: IStandardTrailer// [5] SignatureLength.93, Signature.89, CheckSum.10
}
