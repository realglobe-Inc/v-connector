/**
 * Test for clientFor.
 * Runs with mocha.
 */
'use strict'

const clientFor = require('../lib/clientFor')
const {ok, equal} = require('assert')

describe('client-for', () => {
  before(() => {
  })

  after(() => {
  })

  it('Do test', () => {
    ok(clientFor('ws'))
    ok(clientFor('abstract'))
  })
})

/* global describe, before, after, it */
