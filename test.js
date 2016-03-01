'use strict'

var test = require('tape')
var ObservClamp = require('./')

test('clamps number between min and max', function (t) {
  var obs = ObservClamp(0, -10, 10)

  t.equal(obs(), 0)

  obs.set(100)
  t.equal(obs(), 10)

  obs.set(-11)
  t.equal(obs(), -10)

  obs.set(3)
  t.equal(obs(), 3)

  t.end()
})
