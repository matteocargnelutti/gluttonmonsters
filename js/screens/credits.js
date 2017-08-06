/**
 * Glutton Monsters
 *
 * 2015 - Matteo Cargnelutti
 * See http://github.com/matteocargnelutti
 *
 *
 * SCREENS/CREDITS.JS - CREDITS HANDLING
*/

app.Credits = {
};

/*____________________________________________________________________________*/



/*____________________________________________________________________________*/
/* Credits methods */

/**
 * Init credits
 *
*/
app.Credits.init = function( ) {

    //
    // Play sound (safe)
    //
    app.Sound.play(1);
    
    // Showing credits
    jQuery('.credits-area').addClass('visible');
    
    // Showing switch at +1s
    setTimeout(
        function() {
            jQuery('.credits-area .switch').addClass('visible');
        },
        1000
    );

}


/**
 * Clear Credits
 *
*/
app.Credits.clear = function() {

    //
    // Play sound (safe)
    //
    app.Sound.play(1);

    // Hidding menu
    jQuery('.credits-area').removeClass('visible');
    
    // Hidding switch at +0.5s
    setTimeout(
        function() {
            jQuery('.credits-area .switch').removeClass('visible');
        },
        500
    );

}

/* END - Credits methods */
/*____________________________________________________________________________*/



/*____________________________________________________________________________*/