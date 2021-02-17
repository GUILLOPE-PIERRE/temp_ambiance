basic.showIcon(IconNames.Yes)
basic.pause(2000)
basic.forever(function on_forever() {
    if (input.temperature() > 25) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    
})
