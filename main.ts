input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 100; index++) {
        hummingbird.setTriLED(
        TwoPort.One,
        255,
        0,
        0
        )
        basic.pause(100)
        hummingbird.setTriLED(
        TwoPort.One,
        0,
        255,
        0
        )
        basic.pause(100)
        hummingbird.setTriLED(
        TwoPort.One,
        0,
        0,
        255
        )
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 100; index++) {
        hummingbird.setTriLED(
        TwoPort.Two,
        0,
        0,
        255
        )
        basic.pause(100)
        hummingbird.setTriLED(
        TwoPort.Two,
        255,
        0,
        0
        )
        basic.pause(100)
        hummingbird.setTriLED(
        TwoPort.Two,
        0,
        255,
        0
        )
        basic.pause(100)
    }
})
hummingbird.startHummingbird()
basic.forever(function () {
    music.playMelody("A F E F D G E F ", 500)
    hummingbird.setRotationServo(FourPort.One, 100)
    hummingbird.setRotationServo(FourPort.Two, 100)
})
