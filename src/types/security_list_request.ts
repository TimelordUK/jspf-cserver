import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

export interface ISecurityListRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. LastMsgSeqNumProcessed.369
  SecurityReqID: string// [2] 320 (String)
  SecurityListRequestType: number// [3] 559 (Int)
  Instrument?: IInstrument// [4] Symbol.55, SymbolName.1007, SymbolDigits.1008
  StandardTrailer: IStandardTrailer// [5] SignatureLength.93, Signature.89, CheckSum.10
}
