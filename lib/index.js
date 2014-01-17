/**
 * sails-generate-new-express
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
		'./': { exec: function (scope, cb) { console.log('Running generator (sails-generate-new-express) @ `'+scope.rootPath+'`...'); cb(); }}
	}
};

