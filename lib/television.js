'use strict'

const television = {
    make: 'vizio',
    sizeInIN: 48,
    inputs: ['hdmi', 'vga', '3.5 mm headphone'],
    smartTv: true,
    powerOn: false,
    type: 'lcd',
    body: 'flat',
    power: function () {
        if (television.powerOn) {
            television.powerOn = false
        } else {
            television.powerOn = true
        }
    }
}

