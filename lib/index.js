/**
 * sails-generator-new-but-like-express
 *
 * Usage:
 * `sails generate new`
 *
 * @type {Object}
 */

module.exports = {

	templatesDirectory: require('path').resolve(__dirname,'../templates'),

	before: require('./before'),

	targets: {
		'./': { exec: function (scope, cb) { console.log('Running generator (sails-generator-new-but-like-express) @ `'+scope.rootPath+'`...'); cb(); }}
	}
};

