import {
  MDEntryType,
  SubscriptionRequestType,
  IMarketDataRequest,
  IMarketDataSnapshotFullRefresh,
} from '../types'
import { ILooseObject } from 'jspurefix/dist/collections/collection'

export class FixFactory {

  public FullSnapshot (symbol: string, reqId: string, price: number): ILooseObject {
    // @ts-ignore
    const snapshot: IMarketDataSnapshotFullRefresh = {
      MDReqID: reqId,
      Symbol: symbol,

        NoMDEntries: [
          {
            MDEntryType: MDEntryType.Bid,
            MDEntryPx: price,
            MDEntrySize: 1,
          },
          {
            MDEntryType: MDEntryType.Offer,
            MDEntryPx: price,
            MDEntrySize: 1,
          },
          {
            MDEntryType: MDEntryType.Imbalance,
            MDEntryPx: price,
            MDEntrySize: 1,
          }
        ]
    }
    return snapshot
  }

  public BidOfferRequest (symbol: string): ILooseObject {
    // @ts-ignore
    const bor: IMarketDataRequest = {
      MDReqID: `#${symbol}#0#`,
      SubscriptionRequestType: SubscriptionRequestType.SnapshotPlusUpdates,
      MarketDepth: 0,
        NoMDEntryTypes: [
          {
            MDEntryType: MDEntryType.Bid
          },
          {
            MDEntryType: MDEntryType.Offer
          },
          {
            MDEntryType: MDEntryType.Imbalance
          }
        ],
        NoRelatedSym: [
          {
            Symbol: symbol
          }
        ]
    }
    return bor
  }
}
