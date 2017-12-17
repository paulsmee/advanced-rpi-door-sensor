'use strict'

var _ = require('lodash')
var Gpio = require('pigpio').Gpio

var doorstats = {}

var frontDoorOpen = _.throttle(function frontDoorOpen(whichDoor, doorState) {
    console.log(whichDoor + ' = ' + doorState)
    doorstats[whichDoor] = !doorState
}, 200)

var frontDoor = new Gpio(4, {
    mode: Gpio.INPUT,
    pullUpDown: Gpio.PUD_DOWN,
    edge: Gpio.EITHER_EDGE
})

frontDoor.on('interrupt', function (level) {
    frontDoorOpen('frontDoor', level)
})


var door2 = new Gpio(5, {
    mode: Gpio.INPUT,
    pullUpDown: Gpio.PUD_DOWN,
    edge: Gpio.EITHER_EDGE
  })

door2.on('interrupt', function (level) {
    doorOpen('door2', level)
})

var door3 = new Gpio(6, {
    mode: Gpio.INPUT,
    pullUpDown: Gpio.PUD_DOWN,
    edge: Gpio.EITHER_EDGE
  })

door3.on('interrupt', function (level) {
    doorOpen('door3', level)
})

var door4 = new Gpio(7, {
    mode: Gpio.INPUT,
    pullUpDown: Gpio.PUD_DOWN,
    edge: Gpio.EITHER_EDGE
  })


door4.on('interrupt', function (level) {
    doorOpen('door4', level)
})

module.exports = doorstats

