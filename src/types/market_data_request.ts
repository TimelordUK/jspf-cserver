import { IStandardHeader } from './set/standard_header'
import { IMarketDataRequestNoMDEntryTypes } from './set/market_data_request_no_md_entry_types'
import { IMarketDataRequestNoRelatedSym } from './set/market_data_request_no_related_sym'
import { IStandardTrailer } from './set/standard_trailer'

export interface IMarketDataRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. LastMsgSeqNumProcessed.369
  MDReqID: string// [2] 262 (String)
  SubscriptionRequestType: string// [3] 263 (String)
  MarketDepth: number// [4] 264 (Int)
  MDUpdateType?: number// [5] 265 (Int)
  NoMDEntryTypes: IMarketDataRequestNoMDEntryTypes[]// [6] MDEntryType.269
  NoRelatedSym: IMarketDataRequestNoRelatedSym[]// [7] Symbol.55
  StandardTrailer: IStandardTrailer// [8] SignatureLength.93, Signature.89, CheckSum.10
}
