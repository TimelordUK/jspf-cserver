import { ISessionDescription, MsgType, ASessionMsgFactory } from 'jspurefix'
import { ILooseObject } from 'jspurefix/dist/collections/collection'
import { IStandardHeader } from 'jspurefix/dist/types/FIX4.4/repo'

import {
  ILogon,
  ILogout
} from '../types/'

export class MsgFact extends ASessionMsgFactory {
  constructor (readonly description: ISessionDescription) {
    super(description, (_description: ISessionDescription, _type: string, o: ILooseObject) => o)
    this.isAscii = description?.application?.protocol === 'ascii'
  }

  public logon (): ILooseObject {
    const description = this.description
    // @ts-expect-error ts2307
    const o: ILogon = {
      Username: description.Username,
      Password: description.Password,
      HeartBtInt: description.HeartBtInt,
      ResetSeqNumFlag: description.ResetSeqNumFlag
    }
    return this.mutate(o, MsgType.Logon)
  }

  public logout (text: string): ILooseObject {
    // @ts-expect-error ts2307
    const o: ILogout = { Text: text }
    return this.mutate(o, MsgType.Logout)
  }

  public header (msgType: string, seqNum: number, time: Date, overrideData?: Partial<IStandardHeader>): ILooseObject {
    const description = this.description
    const bodyLength: number = Math.max(4, description.BodyLengthChars ?? 7)
    const placeHolder = Math.pow(10, bodyLength - 1) + 1
    const o: IStandardHeader = {
      BeginString: description.BeginString,
      BodyLength: placeHolder,
      MsgType: msgType,
      SenderCompID: description.SenderCompId,
      SenderSubID: description.SenderSubID,
      MsgSeqNum: seqNum,
      SendingTime: time,
      TargetCompID: description.TargetCompID,
      TargetSubID: description.TargetSubID,
      ...overrideData
    }
    return this.mutate(o, 'StandardHeader')
  }
}
