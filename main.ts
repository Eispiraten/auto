function fahre_rechts () {
    motors.dualMotorPower(Motor.M0, -100)
    motors.dualMotorPower(Motor.M1, 100)
}
function stop () {
    motors.dualMotorPower(Motor.M0, 0)
    motors.dualMotorPower(Motor.M1, 0)
}
function fahre_links () {
    motors.dualMotorPower(Motor.M0, 100)
    motors.dualMotorPower(Motor.M1, -100)
}
function fahre () {
    motors.dualMotorPower(Motor.M0, 100)
    motors.dualMotorPower(Motor.M1, 100)
}
fahre()
basic.pause(5000)
stop()
fahre_rechts()
basic.pause(1000)
stop()
