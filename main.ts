// I also added a security sensor to detect a loud sound. This could be used at night as security if someone breaks into your house. I also programmed it to play a loud sound to hopefully wake the person up and alert them of an intruder
input.onSound(DetectedSound.Loud, function () {
    // I set the temperature so that anything above 32.2 C or 90 F triggers an alarm. The reasoning behind this is anything above 90 means there is trouble and likely a fire. Playing this melody should act as an alarm that there is danger. I also slowed down the tempo for the alarm to play as long as possible for a better chance of waking that person up.
    music.playMelody("C5 C C5 C C5 C C5 C ", 40)
})
basic.forever(function () {
    if (input.temperature() > 32.2) {
        // I set the temperature so that anything above 32.2 C or 90 F triggers an alarm. The reasoning behind this is anything above 90 means there is trouble and likely a fire. Playing this melody should act as an alarm that there is danger.
        music.playMelody("C5 C C5 C C5 C C5 C ", 211)
    }
})
