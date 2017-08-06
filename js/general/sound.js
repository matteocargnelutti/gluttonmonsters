/**
 * Glutton Monsters
 *
 * 2015 - Matteo Cargnelutti
 * See http://github.com/matteocargnelutti
 *
 *
 * GENERAL/SOUND.JS - SOUND HANDLING
*/

app.Sound = {
    isMuted: false,
    sounds: []
};

/*____________________________________________________________________________*/



/*____________________________________________________________________________*/
/* Sound methods */

/**
 * Mute / unmute
 *
*/
app.Sound.setMuteState = function() {
    app.Sound.isMuted = !app.Sound.isMuted;
}

/**
 * Load sounds
 *
*/
app.Sound.load = function() {

    app.Sound.sounds[1] = new Howl({
        urls: ['audio/sound1.ogg','audio/sound1.m4a'],
        autoplay: false,
        loop: false,
        volume: 1,
        onend: function() {
        }
    });
    
    app.Sound.sounds[2] = new Howl({
        urls: ['audio/sound2.ogg','audio/sound2.m4a'],
        autoplay: false,
        loop: false,
        volume: 1,
        onend: function() {
        }
    });
    
    app.Sound.sounds[3] = new Howl({
        urls: ['audio/sound3.ogg','audio/sound3.m4a'],
        autoplay: false,
        loop: false,
        volume: 1,
        onend: function() {
        }
    });
    
}


/**
 * Play sound
 *
 * @param int index
*/
app.Sound.play = function( index ) {

    // Stop here if sound is muted
    if( app.Sound.isMuted == true ) {
        return;
    }
    
    // Play sound
    app.Sound.sounds[index].play();

}

/* END - Sound methos */
/*____________________________________________________________________________*/



/*____________________________________________________________________________*/