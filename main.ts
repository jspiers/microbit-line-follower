function right () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 65)
    wuKong.setMotorSpeed(wuKong.MotorList.M2, 0)
    image = images.arrowImage(ArrowNames.West)
}
function left () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 0)
    wuKong.setMotorSpeed(wuKong.MotorList.M2, 65)
    image = images.arrowImage(ArrowNames.East)
}
function stop () {
    going = 0
    wuKong.stopAllMotor()
    image = images.iconImage(IconNames.Asleep)
    wuKong.setLightMode(wuKong.LightMode.BREATH)
}
input.onButtonPressed(Button.A, function () {
    if (going == 1) {
        stop()
    } else {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        image = images.iconImage(IconNames.Happy)
        basic.pause(5000)
        going = 1
        wuKong.setLightMode(wuKong.LightMode.OFF)
    }
})
function straight () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 65)
    wuKong.setMotorSpeed(wuKong.MotorList.M2, 74)
    image = images.arrowImage(ArrowNames.North)
}
let going = 0
let image: Image = null
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
stop()
basic.forever(function () {
    if (going == 1) {
        if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
            straight()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 0 && pins.digitalReadPin(DigitalPin.P2) == 1) {
            right()
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 0) {
            left()
        }
    }
})
control.inBackground(function () {
    while (true) {
        image.showImage(0)
        basic.pause(200)
    }
})
