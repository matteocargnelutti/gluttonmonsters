/**
 * Glutton Monsters
 *
 * 2015 - Matteo Cargnelutti
 * See http://github.com/matteocargnelutti
 *
 *
 * GENERAL/TOOLS.JS - APP TOOLS
*/

app.Tools = {};

/*____________________________________________________________________________*/



/*____________________________________________________________________________*/
/* Tools Methods */

/**
 * Shuffle an array
 *
*/
app.Tools.shuffleArray = function(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

/* END - Tools Methods */
/*____________________________________________________________________________*/



/*____________________________________________________________________________*/