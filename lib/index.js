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
		'./:appPath/public/javascripts': { folder: {} },
		'./:appPath/public/stylesheets': { folder: {} },
		'./:appPath/public/images': { folder: {} },
		'./:appPath/routes': { folder: {} },
		'./:appPath/routes/index.js': { template: 'routes/index.js' },
		'./:appPath/routes/user.js': { template: 'routes/user.js' },
		'./:appPath/views': { folder: {} },
		'./:appPath/views/index.jade': { template: 'views/index.jade' },
		'./:appPath/views/layout.jade': { template: 'views/layout.jade' },
		'./:appPath/package.json': { jsonfile: require('./package.json.js') },
		'./:appPath/app.js': { copy: 'app.js' }
	}
};

