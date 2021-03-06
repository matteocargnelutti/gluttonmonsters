/**
 * Glutton Monsters
 *
 * 2015 - Matteo Cargnelutti
 * See http://github.com/matteocargnelutti
 *
 *
 * GENERAL/RESOLUTION.JS - RESOLUTION AND RESPONSIVE HANDLING
*/

app.Resolution = {};

/*____________________________________________________________________________*/



/*____________________________________________________________________________*/
/* Resolution Methods */

/**
 * Scroll handling
 *
*/
app.Resolution.scrollHandling = function() {

    // Scroll top for Safari mobile
    jQuery('html, body').animate({scrollTop : 0}, 100);

}

/**
 * Manage scale change
 *
*/
app.Resolution.scale = function() {

}


/**
 * Manage orientation change
 *
*/
app.Resolution.orientation = function() {

    if( window.orientation != undefined ) {
    
        // Show landscape alert
        if( jQuery(window).width() > jQuery(window).height() ) {
        
            // Set height
            jQuery('.landscape-alert').css('height', jQuery(window).height()+100+'px');
            
            // Show
            jQuery('.landscape-alert').show();
            
        }
        // Hide landscape alert
        else {
            jQuery('.landscape-alert').hide();
        }
    
    }

}

/**
 * Set PLAYBALE CONTAINER position
 *
*/
app.Resolution.setPlayableContainerPosition = function() {

    //
    // Calculating the margin top to apply
    //
    var marginTop = jQuery(window).height() - jQuery('.playable-container').height();
    marginTop = marginTop / 2;
    marginTop = marginTop - 6;
    
    //
    // Apply if > 0
    //
    if( marginTop > 0 ) {
    
        jQuery('.playable-container').css(
            'margin-top', 
            marginTop +'px'
        );
    
    }
    
    //alert('W:'+jQuery(window).width()+' - H:'+jQuery(window).height());

}

/* END - Resolution Methods */
/*____________________________________________________________________________*/



/*____________________________________________________________________________*/