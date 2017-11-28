/**
 * Create client instance with type
 * @function clientFor
 * @param {string} type
 * @returns {Object} - V spot client
 */
'use strict'

/** @lends clientFor */
function clientFor (type = 'ws') {
  switch (String(type).toLocaleLowerCase().trim()) {
    case 'abstract': {
      return require('v-spot').client()
    }
    case 'ws': {
      return require('v-spot-ws').client()
    }

    default:
      throw new Error(`Unknown type: ${type}`)
  }
}

module.exports = clientFor
