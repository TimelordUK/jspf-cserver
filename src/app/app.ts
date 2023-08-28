import 'reflect-metadata'

import {
  EngineFactory,
  FixSession,
  IJsFixConfig,
  ISessionDescription,
  ISessionMsgFactory,
  SessionContainer,
  SessionLauncher
} from 'jspurefix'
import { FixClient } from './fix-client'
import { FixServer } from './fix-server'
import { MsgFact } from './msg-fact'

const root = '../../data/session/'
const commander = require('commander') // (normal include)
const program = new commander.Command()
program
  .option('-c, --client <string>', 'client config', `${root}test-initiator.json`)
  .option('-s, --server <string>', 'server config (default no server)', null)
  .option('-l, --logout <number>', 'client logout after seconds', '12')

export interface IOptions {
  client: string
  server: string
  logout: number
}

program.parse()
const opts: IOptions = program.opts()

class MySessionContainer extends SessionContainer {
  protected makeSessionFactory (description: ISessionDescription): ISessionMsgFactory {
    return new MsgFact(description)
  }
}

class AppLauncher extends SessionLauncher {
  client: FixClient
  public constructor (
    client: string,
    server: string) {
    super(client, server)
    this.sessionContainer = new MySessionContainer()
    this.root = __dirname
  }

  // register a custom object with the DI container.

  protected MakeServer (config: IJsFixConfig): FixSession {
    const server = new FixServer(config)
    return server
  }

  protected MakeClient (config: IJsFixConfig): FixSession {
    this.client = new FixClient(config)
    setTimeout(() => {
      this.client.endPromise().then(txt => {
        console.log(`client ${txt}`)
      }).catch(e => {
        console.error(e)
      })
    }, opts.logout * 1000)
    return this.client
  }

  stopController (): void {
  }

  public launcher (): void {
    const instance = this
    this.run().then(() => {
      instance.stopController()
      console.log('finished.')
    }).catch(e => {
      console.error(e)
    })
  }
}

class FactoryAppLauncher extends AppLauncher {
  public constructor (
    client = opts.client,
    server = opts.server) {
    super(client, server)
  }

  /* method 2: override this method for factory construction */
  protected override makeFactory (config: IJsFixConfig): EngineFactory {
    const isInitiator = this.isInitiator(config.description)
    const instance = this
    return {
      makeSession: () => isInitiator
        ? instance.MakeClient(config)
        : instance.MakeServer(config)
    }
  }
}

const l: AppLauncher = new FactoryAppLauncher()
l.launcher()
