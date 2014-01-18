/**
 * sails-generate-new-but-like-express
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
		'./:appPath/public': { folder: {} },
		'./:appPath/routes': { folder: {} },
		'./:appPath/views': { folder: {} },
		'./:appPath/package.json': { jsonfile: require('./package.json.js') },
		'./:appPath/app.js': { copy: 'app.js' }
	}
};

