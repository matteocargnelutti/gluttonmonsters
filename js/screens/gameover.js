/**
 * Glutton Monsters
 *
 * 2015 - Matteo Cargnelutti
 * See http://github.com/matteocargnelutti
 *
 *
 * SCREENS/GAMEOVER.JS - GAMEOVER HANDLING
*/

app.Gameover = {
};

/*____________________________________________________________________________*/



/*____________________________________________________________________________*/
/* Game over methods */

/**
 * Init game over
 *
 * @param string cause
*/
app.Gameover.init = function( cause ) {
    
    //
    // Play sound (safe)
    //
    app.Sound.play(3);

    //
    // Store best score if so
    //
    app.Bestscore.handle();
    
    //
    // Launch game over screen
    //
    
    // Choosing cause to display
    jQuery('.gameover-area .cause span').hide();
    jQuery('.gameover-area .cause .'+cause+'').show();
    
    // Integrating score
    jQuery('.gameover-area .result span').html(app.Match.score);
    
    // Showing game over screen
    jQuery('.gameover-area').addClass('visible');
    
    //
    // Enable the switches at +1second
    //
    setTimeout(
        function() {
            jQuery('.gameover-area .switch').addClass('enabled');
        },
        1000
    );

}


/**
 * Clear Game over
 *
*/
app.Gameover.clear = function() {

    //
    // Play sound (safe)
    //
    app.Sound.play(1);

    //
    // Hidding game over
    //
    jQuery('.gameover-area').removeClass('visible');
    
    //
    // Disabled switches at +1second
    //
    setTimeout(
        function() {
            jQuery('.gameover-area .switch').removeClass('enabled');
        },
        1000
    );

}

/* END - Game over methods */
/*____________________________________________________________________________*/



/*____________________________________________________________________________*/