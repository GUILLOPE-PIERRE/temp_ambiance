basic.show_icon(IconNames.YES)
basic.pause(2000)

def on_forever():
    if input.temperature() > 25:
        basic.show_icon(IconNames.HAPPY)
    else:
        basic.show_icon(IconNames.SAD)
basic.forever(on_forever)
