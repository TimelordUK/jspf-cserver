import { IStandardHeader } from './set/standard_header'
import { IMarketDataSnapshotFullRefreshNoMDEntries } from './set/market_data_snapshot_full_refresh_no_md_entries'
import { IStandardTrailer } from './set/standard_trailer'

export interface IMarketDataSnapshotFullRefresh {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. LastMsgSeqNumProcessed.369
  MDReqID?: string// [2] 262 (String)
  Symbol: string// [3] 55 (String)
  NoMDEntries: IMarketDataSnapshotFullRefreshNoMDEntries[]// [4] MDEntryType.269, QuoteEntryID.299 .. MDEntryID.278
  StandardTrailer: IStandardTrailer// [5] SignatureLength.93, Signature.89, CheckSum.10
}
