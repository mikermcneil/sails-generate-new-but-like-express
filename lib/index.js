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
		'./public': { folder: {} },
		'./routes': { folder: {} },
		'./views': { folder: {} },
		'./package.json': { jsonfile: require('./package.json.js') },
		'./app.js': { copy: 'app.js' }
	}
};

