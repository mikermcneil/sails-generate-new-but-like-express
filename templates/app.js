/**
 * Module dependencies
 */

var Sails = require('sails').constructor;


// Load logic from `routes` directory
var routes = require('./routes');
var user = require('./routes/user');


// Configure and lift app
var app = new Sails();
app.lift({
  port: 1337,
  views: { engine: 'jade', layout: false },
  hooks: { grunt: false },
  globals: false,
  routes: {
    'get /': routes.index,
    'get /users': user.list
  }
});
