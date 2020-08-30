function drawTriangle () {
    for (let column = 0; column <= 4; column++) {
        for (let row = 0; row <= column; row++) {
            led.plot(column, row)
        }
    }
}
function drawDiagonal2 () {
    for (let index = 0; index <= 4; index++) {
        led.plot(4 - index, index)
    }
}
function drawRow (row: number) {
    for (let column = 0; column <= 4; column++) {
        led.plot(column, row)
    }
}
function drawSquare () {
    for (let column = 0; column <= 4; column++) {
        for (let row = 0; row <= 4; row++) {
            led.plot(column, row)
        }
    }
}
function drawTriangleV2 () {
    for (let column = 0; column <= 4; column++) {
        for (let row = 0; row <= 4; row++) {
            if (row + column <= 4) {
                led.plot(column, row)
            }
        }
    }
}
function drawDiagonal () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, index)
    }
}
function drawCheckerboard () {
    for (let column = 0; column <= 4; column++) {
        for (let row = 0; row <= 4; row++) {
            if ((row + column) % 2 == 0) {
                led.plot(column, row)
            }
        }
    }
}
drawCheckerboard()
