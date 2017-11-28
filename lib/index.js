/**
 * Cross engine v connector
 * @module v-connector
 */
'use strict'

const clientFor = require('./clientFor')

const lib = clientFor.bind(this)

Object.assign(lib, {
  clientFor
})

module.exports = lib
