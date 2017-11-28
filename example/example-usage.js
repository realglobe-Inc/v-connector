'use strict'

const vConnector = require('v-connector')

async function tryExample () {
  const client = vConnector.clientFor('ws')
  /* ... */
}

tryExample().catch((err) => console.error(err))
