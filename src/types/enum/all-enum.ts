export enum MsgType {
  Heartbeat = '0',
  TestRequest = '1',
  ResendRequest = '2',
  Reject = '3',
  SequenceReset = '4',
  Logout = '5',
  ExecutionReport = '8',
  OrderCancelReject = '9',
  Logon = 'A',
  OrderSingle = 'D',
  OrderList = 'E',
  OrderCancelRequest = 'F',
  OrderCancelReplaceRequest = 'G',
  OrderStatusRequest = 'H',
  MarketDataRequest = 'V',
  MarketDataSnapshotFullRefresh = 'W',
  MarketDataIncrementalRefresh = 'X',
  MarketDataRequestReject = 'Y',
  BusinessMessageReject = 'j',
  SecurityTypeRequest = 'v',
  SecurityTypes = 'w',
  SecurityListRequest = 'x',
  SecurityList = 'y',
  OrderMassStatusRequest = 'AF',
  RequestForPositions = 'AN',
  RequestForPositionsAck = 'AO',
  PositionReport = 'AP'
}

export enum OrdStatus {
  New = '0',
  PartiallyFilled = '1',
  Filled = '2',
  Canceled = '4',
  Replaced = '5',
  Rejected = '8',
  Expired = 'C'
}

export enum OrdType {
  Market = '1',
  Limit = '2',
  Stop = '3',
  StopLimit = '4',
  MarketOnClose = '5',
  WithOrWithout = '6',
  LimitOrBetter = '7',
  LimitWithOrWithout = '8',
  OnBasis = '9',
  OnClose = 'A',
  LimitOnClose = 'B',
  ForexMarket = 'C',
  PreviouslyQuoted = 'D',
  PreviouslyIndicated = 'E',
  ForexLimit = 'F',
  ForexSwap = 'G',
  ForexPreviouslyQuoted = 'H',
  Funari = 'I',
  MarketIfTouched = 'J',
  MarketWithLeftoverAsLimit = 'K',
  PreviousFundValuationPoint = 'L',
  NextFundValuationPoint = 'M',
  Pegged = 'P'
}

export enum Side {
  Buy = '1',
  Sell = '2',
  BuyMinus = '3',
  SellPlus = '4',
  SellShort = '5',
  SellShortExempt = '6',
  Undisclosed = '7',
  Cross = '8',
  CrossShort = '9',
  CrossShortExempt = 'A',
  AsDefined = 'B',
  Opposite = 'C',
  Subscribe = 'D',
  Redeem = 'E',
  Lend = 'F',
  Borrow = 'G'
}

export enum TimeInForce {
  Day = '0',
  GoodTillCancel = '1',
  AtTheOpening = '2',
  ImmediateOrCancel = '3',
  FillOrKill = '4',
  GoodTillCrossing = '5',
  GoodTillDate = '6',
  AtTheClose = '7'
}

export enum PositionEffect {
  Open = 'O',
  Close = 'C',
  Rolled = 'R',
  Fifo = 'F'
}

export enum EncryptMethod {
  NoneOther = 0,
  Pkcs = 1,
  Des = 2,
  PkcsDes = 3,
  PgpDes = 4,
  PgpDesMd5 = 5,
  PemDesMd5 = 6
}

export enum OrdRejReason {
  BrokerExchangeOption = 0,
  UnknownSymbol = 1,
  ExchangeClosed = 2,
  OrderExceedsLimit = 3,
  TooLateToEnter = 4,
  UnknownOrder = 5,
  DuplicateOrder = 6,
  DuplicateOfAVerballyCommunicatedOrder = 7,
  StaleOrder = 8,
  TradeAlongRequired = 9,
  InvalidInvestorId = 10,
  UnsupportedOrderCharacteristic = 11,
  SurveillenceOption = 12,
  IncorrectQuantity = 13,
  IncorrectAllocatedQuantity = 14,
  UnknownAccount = 15,
  Other = 99
}

export enum ExecType {
  New = '0',
  Canceled = '4',
  Replace = '5',
  Rejected = '8',
  Expired = 'C',
  Trade = 'F',
  OrderStatus = 'I'
}

export enum SubscriptionRequestType {
  Snapshot = '0',
  SnapshotPlusUpdates = '1',
  DisablePreviousSnapshotPlusUpdateRequest = '2'
}

export enum MDUpdateType {
  FullRefresh = 0,
  IncrementalRefresh = 1
}

export enum MDEntryType {
  Bid = '0',
  Offer = '1',
  Trade = '2',
  IndexValue = '3',
  OpeningPrice = '4',
  ClosingPrice = '5',
  SettlementPrice = '6',
  TradingSessionHighPrice = '7',
  TradingSessionLowPrice = '8',
  TradingSessionVwapPrice = '9',
  Imbalance = 'A',
  TradeVolume = 'B',
  OpenInterest = 'C'
}

export enum MDUpdateAction {
  New = '0',
  Change = '1',
  Delete = '2'
}

export enum MDReqRejReason {
  UnknownSymbol = '0',
  DuplicateMdreqid = '1',
  InsufficientBandwidth = '2',
  InsufficientPermissions = '3',
  UnsupportedSubscriptionrequesttype = '4',
  UnsupportedMarketdepth = '5',
  UnsupportedMdupdatetype = '6',
  UnsupportedAggregatedbook = '7',
  UnsupportedMdentrytype = '8',
  UnsupportedTradingsessionid = '9',
  UnsupportedScope = 'A',
  UnsupportedOpenclosesettleflag = 'B',
  UnsupportedMdimplicitdelete = 'C'
}

export enum MessageEncoding {
  Iso2022Jp = 'ISO-2022-JP',
  EucJp = 'EUC-JP',
  ShiftJis = 'SHIFT_JIS',
  Utf8 = 'UTF-8'
}

export enum SessionRejectReason {
  InvalidTagNumber = 0,
  RequiredTagMissing = 1,
  TagNotDefinedForThisMessageType = 2,
  UndefinedTag = 3,
  TagSpecifiedWithoutAValue = 4,
  ValueIsIncorrect = 5,
  IncorrectDataFormatForValue = 6,
  DecryptionProblem = 7,
  SignatureProblem = 8,
  CompidProblem = 9,
  SendingtimeAccuracyProblem = 10,
  InvalidMsgtype = 11,
  XmlValidationError = 12,
  TagAppearsMoreThanOnce = 13,
  TagSpecifiedOutOfRequiredOrder = 14,
  RepeatingGroupFieldsOutOfOrder = 15,
  IncorrectNumingroupCountForRepeatingGroup = 16,
  NonDataValueIncludesFieldDelimiter = 17,
  Other = 99
}

export enum BusinessRejectReason {
  Other = 0,
  UnkownId = 1,
  UnknownSecurity = 2,
  UnsupportedMessageType = 3,
  ApplicationNotAvailable = 4,
  ConditionallyRequiredFieldMissing = 5,
  NotAuthorized = 6,
  DelivertoFirmNotAvailableAtThisTime = 7
}

export enum MsgDirection {
  Send = 'S',
  Receive = 'R'
}

export enum CxlRejResponseTo {
  OrderCancelRequest = '1',
  OrderCancelReplaceRequest = '2'
}

export enum SecurityListRequestType {
  Symbol = 0,
  SecuritytypeAndOrCficode = 1,
  Product = 2,
  Tradingsessionid = 3,
  AllSecurities = 4
}

export enum SecurityRequestResult {
  ValidRequest = 0,
  InvalidOrUnsupportedRequest = 1,
  NoInstrumentsFoundThatMatchSelectionCriteria = 2,
  NotAuthorizedToRetrieveInstrumentData = 3,
  InstrumentDataTemporarilyUnavailable = 4,
  RequestForInstrumentDataNotSupported = 5
}

export enum MassStatusReqType {
  StatusForOrdersForASecurity = 1,
  StatusForOrdersForAnUnderlyingSecurity = 2,
  StatusForOrdersForAProduct = 3,
  StatusForOrdersForACficode = 4,
  StatusForOrdersForASecuritytype = 5,
  StatusForOrdersForATradingSession = 6,
  StatusForAllOrders = 7,
  StatusForOrdersForAPartyid = 8
}

export enum PosReqResult {
  ValidRequest = 0,
  InvalidOrUnsupportedRequest = 1,
  NoPositionsFoundThatMatchCriteria = 2,
  NotAuthorizedToRequestPositions = 3,
  RequestForPositionNotSupported = 4,
  Other = 99
}

export enum TriggerMethodSL {
  Trade = 1,
  Opposite = 2,
  DoubleTrade = 3,
  DoubleOpposite = 4
}

export enum SymbolDigits {
  E0 = 0,
  E1 = 1,
  E2 = 2,
  E3 = 3,
  E4 = 4,
  E5 = 5
}

