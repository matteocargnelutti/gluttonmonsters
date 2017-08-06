/**
 * Glutton Monsters
 *
 * 2015 - Matteo Cargnelutti
 * See http://github.com/matteocargnelutti
 *
 *
 * SCREENS/MATCH.JS - MATCH HANDLING
*/

app.Match = {
    score: 0,
    timeToShoot: 2000, // milliseconds
    lastShootTime: 0, // milliseconds
    gameIsOver: true
};

/*____________________________________________________________________________*/



/*____________________________________________________________________________*/
/* Match Methods */

/**
 * Init match
 *
*/
app.Match.init = function() {

    //
    // Cleanup
    //
    app.Match.clear();
    
    //
    // Ready ? Message
    //
    
    // Step 1
    jQuery('.fight-area .launch').addClass('visible');
    
    // Re-set the text if modified by keyboard instructions
    jQuery('.fight-area .launch .step1').html('Tap the <b>RED</b> monsters');
    
    jQuery('.fight-area .launch .step1').show();
    jQuery('.fight-area .launch .step2').hide();
    
    // Do we have to show the keyboard instructions ?
    if( window.orientation == undefined ) {
    
        setTimeout(
            function() {
                jQuery('.fight-area .launch .step1').html('You can use arrow keys too');
            },
            750
        );
        
    }
    
    // Step 2 + 1.5 second 
    setTimeout(
        function() {
            jQuery('.fight-area .launch .step1').hide();
            jQuery('.fight-area .launch .step1-5').hide();
            jQuery('.fight-area .launch .step2').show();
            app.Sound.play(1);
        },
        1750
    );
    
    //
    // New set of monsters and start
    // After 2.5 seconds
    //
    setTimeout(
        function() {
        
            // Delete ready ? message
            jQuery('.fight-area .launch').removeClass('visible');
            
            // Play sound (safe)
            app.Sound.play(1);
            
            // New set of monsters
            app.Match.newSetOfMonsters();
            
        },
        2500
    );

}


/**
 * Clear match
 * [+] Call the GameOver Clear
*/
app.Match.clear = function() {
    
    //
    // Reset values
    //
    app.Match.score = 0;
    app.Match.timeToShoot = 2000;
    app.Match.lastShootTime = 0;
    app.Match.gameIsOver = false;
    
    //
    // Hidding game over
    //
    app.Gameover.clear();
    
    //
    // Hidding monsters
    //
    jQuery('.fight-area .monster').removeClass('visible');
    
}


/**
 * Game Over
 *
 * @param string cause (timeout/enemy/friendlyfire)
*/
app.Match.gameOver = function(cause) {
    
    //
    // Set the game screen as over
    //
    app.Match.gameIsOver = true;
    
    //
    // Game over trigger
    //
    app.Gameover.init(cause);

}


/**
 * Generate a new set of monsters
 *
*/
app.Match.newSetOfMonsters = function() {

    //
    // Hidding monsters
    //
    jQuery('.fight-area .monster').removeClass('visible');
    
    //
    // Player have a limited time to shoot
    //
    if( app.Match.score > 10 ) {
        app.Match.timeToShoot = 1000;
    }
    
    if( app.Match.score > 20  ) {
        app.Match.timeToShoot = 850;
    }
    
    if( app.Match.score > 30 ) {
        app.Match.timeToShoot = 700;
    }
    
    if( app.Match.score > 40 ) {
        app.Match.timeToShoot = 600;
    }
    
    //
    // Randomly sort possibilities
    //
    
    var monsterType = [];
    
    // SCORE < 10 - 1 enemy, 1 friend
    monsterTypes = ["enemy","friend","empty", "empty"];
    
    // SCORE > 10 - 1 enemy, 2 friends
    if( app.Match.score > 10 ) {
        monsterTypes = ["enemy","friend","friend", "empty"];
    }
    
    // SCORE > 20 - 1 enemy, 3 friends
    if( app.Match.score > 20 ) {
        monsterTypes = ["enemy","friend","friend", "friend"];
    }
    
    // Shuffle for randomizing
    monsterTypes = app.Tools.shuffleArray(monsterTypes);
    
    // Treat the "friend" type to define which type of friend is it (1,2,3)
    for( var i = 0; i < 4; i++ ) {
    
        if( monsterTypes[i] == 'friend' ) {
            monsterTypes[i] = 'friend'+( app.Tools.shuffleArray(["1","2","3"])[0] );
        }
    
    }

    //
    // Removing types of monsters
    //
    jQuery('.fight-area .monster.enemy').removeClass('enemy');
    jQuery('.fight-area .monster.friend1').removeClass('friend1');
    jQuery('.fight-area .monster.friend2').removeClass('friend2');
    jQuery('.fight-area .monster.friend3').removeClass('friend3');
    jQuery('.fight-area .monster.empty').removeClass('empty');
    
    //
    // Applying new monsters types at +0.1
    //
    setTimeout( 
        function() {
            jQuery('.fight-area .top .monster').addClass( monsterTypes[0] );
            jQuery('.fight-area .bottom .monster').addClass( monsterTypes[1] );
            jQuery('.fight-area .left .monster').addClass( monsterTypes[2] );
            jQuery('.fight-area .right .monster').addClass( monsterTypes[3] );
        },
        100
    );
    
    //
    // Showing monsters in +0.15s
    //
    setTimeout(
        function() {
            jQuery('.fight-area .monster').addClass('visible');
        },
        150
    );
    

    //
    // Shooting delay
    //    
    setTimeout(
        function() {
        
            // Init date timer
            var date = new Date();
            
            // Time since last shoot
            var timeSinceLastShoot = date.getTime() - app.Match.lastShootTime;
        
            // If the time between the last shot and now is > to the timeToShot
            if( timeSinceLastShoot > app.Match.timeToShoot ) {
            
                if( app.Match.gameIsOver != true ) { 
                    app.Match.gameOver('timeout');
                    return;
                }
                
            }
        
        },
        app.Match.timeToShoot
    );

}


/**
 * Handling tap
 *
 * @param string areaType
*/
app.Match.handleTap = function(areaType) {

    //
    // Enemy
    //
    if( areaType == 'enemy' ) {
    
        // Set last time shoot
        var date = new Date();
        app.Match.lastShootTime = date.getTime();
        
        // Play sound (safe)
        app.Sound.play(2);
        
        // Add score
        app.Match.score = app.Match.score+1;
        jQuery('.score').html(app.Match.score);
        
        // Display score for 0.4sec
        jQuery('.score').addClass('visible');
        
        setTimeout(
            function() {
                jQuery('.score').removeClass('visible');
            },
            400
        );
        
        // Next set
        app.Match.newSetOfMonsters();
    
    }
    
    //
    // Friend
    //
    if( areaType == 'friend' ) {
    
        // Game over
        app.Match.gameOver('friendlyfire');
    
    }
    
    //
    // Empty
    //
    if( areaType == 'empty' ) {
    }


}

/**
 * Handling keyboard
 * 38 : Up 
 * 40 : Down 
 * 37 : Left 
 * 39 : Right
 *
 * @param string key
*/
app.Match.handleKeyboard = function(key) {

    //
    // Only when running
    //
    if( app.Match.gameIsOver ) {
        return;
    }

    //
    // Assign key to area
    //
    var area = '';
    
    if( key.which == 38 ) {
        area = 'top';
    }
    
    if( key.which == 40 ) {
        area = 'bottom';
    }
    
    if( key.which == 37 ) {
        area = 'left';
    }
    
    if( key.which == 39 ) {
        area = 'right';
    }
    
    //
    // If area assigned, check the content
    //
    if( area.length > 0 ) {
    
        // If ENEMY is on top
        if( jQuery('.fight-area .area.'+area+' .monster').hasClass('enemy') ) {
            app.Match.handleTap('enemy');
        }
        
        // If FRIEND is on top
        if(
            jQuery('.fight-area .area.'+area+' .monster').hasClass('friend1') ||
            jQuery('.fight-area .area.'+area+' .monster').hasClass('friend2') ||
            jQuery('.fight-area .area.'+area+' .monster').hasClass('friend3')
        ) {
            app.Match.handleTap('friend');
        }
            
    }


}

/* END - Match Methods */
/*____________________________________________________________________________*/



/*____________________________________________________________________________*/