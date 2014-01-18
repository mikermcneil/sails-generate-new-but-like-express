/**
 * Module dependencies
 */
var Sails = require('sails/lib/app');
var sails = new Sails();



// Load logic from `routes` directory
var routes = require('./routes');
var user = require('./routes/user');


// Lift server
sails.lift({
	views: {
		engine: 'jade'
	},
	routes: {
		'get /': routes.index,
		'get /users': user.list
	}
});
