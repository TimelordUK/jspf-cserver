import { IStandardHeader } from './set/standard_header'
import { ISecurityListNoRelatedSym } from './set/security_list_no_related_sym'
import { IStandardTrailer } from './set/standard_trailer'

export interface ISecurityList {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. LastMsgSeqNumProcessed.369
  SecurityReqID: string// [2] 320 (String)
  SecurityResponseID: string// [3] 322 (String)
  SecurityRequestResult: number// [4] 560 (Int)
  NoRelatedSym?: ISecurityListNoRelatedSym[]// [5] Symbol.55, SymbolName.1007, SymbolDigits.1008
  StandardTrailer: IStandardTrailer// [6] SignatureLength.93, Signature.89, CheckSum.10
}
