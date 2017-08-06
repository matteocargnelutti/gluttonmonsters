/**
 * Glutton Monsters
 *
 * 2015 - Matteo Cargnelutti
 * See http://github.com/matteocargnelutti
 *
 *
 * GAME.JS - MAIN TRUNK
*/

jQuery(document).ready( function() {
/*____________________________________________________________________________*/



/*____________________________________________________________________________*/
/* APP INIT */

/**
 * Resolution and screen
 *
*/

// Resolution scale : on launch
app.Resolution.scale();

// Resolution scale : on resize
jQuery(window).resize( function() {
    app.Resolution.scale();
});

// Orientation : on launch
app.Resolution.orientation();

// Orientation : on orientation change
jQuery(window).resize( function() {
    app.Resolution.orientation();
});


/**
 * Sounds
 *
*/

// Preload
app.Sound.load();


/**
 * Playable Container position
 *
*/

// Position : on ready
app.Resolution.setPlayableContainerPosition();

// Position : on resize
jQuery(window).resize( function() {
    app.Resolution.setPlayableContainerPosition();
});

// Scroll handling
app.Resolution.scrollHandling();

/* END - APP INIT */
/*____________________________________________________________________________*/



/*____________________________________________________________________________*/
/* MENU SCREEN */

/**
 * Showing menu on startup
 *
*/
setTimeout(
    function() {
        
        // Launch menu
        app.Menu.init();
        
        // Play sound except on Safari
        if( !(navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) ) {
            app.Sound.play(2);
        }
    },
    750
);

/**
 * Changing monster type every 1500ms
 *
*/
setInterval(
    function() {
        app.Menu.changeMonsterType();
    },
    1500
);


/**
 * Play switch
 *
*/
jQuery(document.body).on('tap', '.menu-area .play', function() {

    // Clear menu 
    app.Menu.clear();

    // Launch Match
    app.Match.init();
    
});


/**
 * Sound switch
 *
*/
jQuery('.menu-area .sound').click( function() {
    app.Menu.switchSoundMode();
});


/**
 * Credits switch
 *
*/
jQuery(document.body).on('tap', '.menu-area .credits', function() {

    // Clear menu 
    app.Menu.clear();

    // Launch credits
    app.Credits.init();
    
});

/* END - MENU SCREEN */
/*____________________________________________________________________________*/



/*____________________________________________________________________________*/
/* MATCH SCREEN */

//
// Lock scroll during game
//
jQuery(document).bind('touchmove', function(e) {

    if( app.Match.score > 0 ) {
	    e.preventDefault();
	}
	
});

/**
 * Keyboard management
 *
*/
// Keyboard version
jQuery(document.body).keydown( function(key) {
    app.Match.handleKeyboard(key);
});


/**
 * Tap on enemy
 *
*/
jQuery(document.body).on('tap', '.fight-area .monster.enemy', function() {
    app.Match.handleTap('enemy');
});


/**
 * Tap on friend
 *
*/
jQuery(document.body).on('tap', '.fight-area .monster.friend1', function() {
    app.Match.handleTap('friend');
});

jQuery(document.body).on('tap', '.fight-area .monster.friend2', function() {
    app.Match.handleTap('friend');
});

jQuery(document.body).on('tap', '.fight-area .monster.friend3', function() {
    app.Match.handleTap('friend');
});


/**
 * Tap on empty
 *
*/
jQuery(document.body).on('tap', '.fight-area .monster.empty', function() {
    app.Match.handleTap('empty');
});

/* END - MATCH SCREEN */
/*____________________________________________________________________________*/



/*____________________________________________________________________________*/
/* GAME OVER SCREEN */

/**
 * Retry
 *
*/
jQuery(document.body).on('tap', '.gameover-area .retry.enabled', function() {
    app.Match.init();
});


/**
 * Quit
 *
*/
jQuery(document.body).on('tap', '.gameover-area .quit.enabled', function() {
    app.Match.clear();
    app.Menu.init();
});

/* END - GAME OVER SCREEN */
/*____________________________________________________________________________*/



/*____________________________________________________________________________*/
/* CREDITS SCREEN */

/**
 * Close 
 *
*/
jQuery(document.body).on('tap', '.credits-area .quit', function() {

    // Clear credits 
    app.Credits.clear();

    // Launch menu
    app.Menu.init();
    
});

/* END - CREDITS SCREEN */
/*____________________________________________________________________________*/



/*____________________________________________________________________________*/
});