'use strict'

var Observ = require('observ')
var clamp = require('clamp')

module.exports = function ObservClamp (initial, min, max) {
  var obs = Observ()

  var _set = obs.set
  obs.set = function set (value) {
    return _set(clamp(value, min, max))
  }

  obs.set(initial)

  return obs
}
