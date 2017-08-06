/**
 * Glutton Monsters
 *
 * 2015 - Matteo Cargnelutti
 * See http://github.com/matteocargnelutti
 *
 *
 * SCREENS/MENU.JS - MENU HANDLING
*/

app.Menu = {
    currentMonsterType: 'enemy' // Type of the monster displayed
};

/*____________________________________________________________________________*/



/*____________________________________________________________________________*/
/* Menu methods */

/**
 * Init menu
 *
*/
app.Menu.init = function( ) {

    // Setting best score
    jQuery('.menu-area .bestscore span').html(
        app.Bestscore.get
    );

    // Showing menu
    jQuery('.menu-area').addClass('visible');

}


/**
 * Change sound mode
 *
*/
app.Menu.switchSoundMode = function() {

    // Set mute state
    app.Sound.setMuteState();
    
    // Change display
    if( app.Sound.isMuted == true ) {
        jQuery('.menu-area .sound').html('Sound : Off');
    }
    else {
        jQuery('.menu-area .sound').html('Sound : On');
    }
    
    // Play sound (safe)
    app.Sound.play(1);

}

/**
 * Menu monster : changing type
 *
*/
app.Menu.changeMonsterType = function( ) {

    // Default : enemy

    // Friend 1
    if( app.Menu.currentMonsterType == 'enemy' ) {
        
        jQuery('.menu-area .monster').removeClass('enemy');
        
        jQuery('.menu-area .monster').addClass('friend1');
        
        app.Menu.currentMonsterType = 'friend1';
       
        return;
    }
    
    // Friend 2
    if( app.Menu.currentMonsterType == 'friend1' ) {
        
        jQuery('.menu-area .monster').removeClass('friend1');
        jQuery('.menu-area .monster').addClass('friend2');
        
        app.Menu.currentMonsterType = 'friend2';
        
        return;
    }
    
    // Friend 3
    if( app.Menu.currentMonsterType == 'friend2' ) {
        
        jQuery('.menu-area .monster').removeClass('friend2');
        jQuery('.menu-area .monster').addClass('friend3');
        
        app.Menu.currentMonsterType = 'friend3';
        
        return;
    }
    
    // Enemy
    if( app.Menu.currentMonsterType == 'friend3' ) {
        
        jQuery('.menu-area .monster').removeClass('friend3');
        jQuery('.menu-area .monster').addClass('enemy');
       
        app.Menu.currentMonsterType = 'enemy';
        
        return;
    }

}


/**
 * Clear Menu
 *
*/
app.Menu.clear = function() {

    // Hidding menu
    jQuery('.menu-area').removeClass('visible');

}

/* END - Menu methods */
/*____________________________________________________________________________*/



/*____________________________________________________________________________*/