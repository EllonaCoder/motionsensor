let x = 0
let y = 0
let mapx = 0
let mapy = 0
basic.forever(function () {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    mapx = Math.map(x, -1023, 1023, 0, 4)
    mapy = Math.map(y, -1023, 1023, 0, 4)
    led.plot(mapx, mapy)
    basic.pause(100)
})
