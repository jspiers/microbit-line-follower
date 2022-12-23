image = images.icon_image(IconNames.ASLEEP)
music.play_melody("E E F E D D E F ", 259)
music.play_melody("B E A C D G E D ", 348)
music.play_melody("C5 B A G F E D C ", 999)

def on_in_background():
    while True:
        image.show_image(0)
        basic.pause(200)
control.in_background(on_in_background)
