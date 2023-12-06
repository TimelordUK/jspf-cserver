import {
  IMarketDataRequest,
  IMarketDataSnapshotFullRefresh,
  MDEntryType,
  SubscriptionRequestType
} from '../types'

export class FixFactory {
  public FullSnapshot (symbol: string, reqId: string, price: number): Partial<IMarketDataSnapshotFullRefresh> {
    return {
      MDReqID: reqId,
      Symbol: symbol,

      NoMDEntries: [
        {
          MDEntryType: MDEntryType.Bid,
          MDEntryPx: price,
          MDEntrySize: 1
        },
        {
          MDEntryType: MDEntryType.Offer,
          MDEntryPx: price,
          MDEntrySize: 1
        },
        {
          MDEntryType: MDEntryType.Imbalance,
          MDEntryPx: price,
          MDEntrySize: 1
        }
      ]
    }
  }

  public BidOfferRequest (symbol: string): Partial<IMarketDataRequest> {
    return {
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
  }
}
