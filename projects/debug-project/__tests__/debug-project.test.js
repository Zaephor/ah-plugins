/* eslint-env node, mocha */
'use strict'
const {expect} = require('chai')

const ActionHero = require('actionhero')
const actionhero = new ActionHero.Process()
let api

describe('debug-project', () => {
  before(async () => { api = await actionhero.start() })
  after(async () => { await actionhero.stop() })

  it('should have booted into the test env', () => {
    expect(process.env.NODE_ENV).to.equal('test')
    expect(api.env).to.equal('test')
    expect(api.id).to.be.ok
  })

  it('can retrieve server uptime via the status action', async () => {
    let { uptime } = await api.specHelper.runAction('status')
    expect(uptime).to.be.above(0)
  })
})
