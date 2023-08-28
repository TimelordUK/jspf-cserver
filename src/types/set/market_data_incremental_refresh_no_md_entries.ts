export interface IMarketDataIncrementalRefreshNoMDEntries {
  MDUpdateAction: string// [1] 279 (String)
  MDEntryType?: string// [2] 269 (String)
  MDEntryID: string// [3] 278 (String)
  Symbol: string// [4] 55 (String)
  MDEntryPx?: number// [5] 270 (Float)
  MDEntrySize?: number// [6] 271 (Float)
}
