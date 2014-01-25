
/**
 *
 * @param  {[type]} scope [description]
 * @return {[type]}       [description]
 */
module.exports = function dataForPackageJSON (scope) {

	scope.sailsPackageJSON = {
		version: '~0.10.0',
		dependencies: {
			'sails-disk': '~0.10.0',
			'ejs': '~0.8.4',
			'grunt': '*'
		}
	};

	// Override sails version temporarily
	var sailsVersionDependency = '~' + scope.sailsPackageJSON.version;

	return {
		name: scope.appName,
		'private': true,
		version: '0.0.0',
		description: 'a Sails application',
		dependencies: {
			'sails'			: sailsVersionDependency,
			'sails-disk'	: scope.sailsPackageJSON.dependencies['sails-disk'],
			'jade'			: '*',
			'grunt'			: scope.sailsPackageJSON.dependencies['grunt']
		},
		scripts: {
			// TODO: Include this later when we have "sails test" ready.
			// test: './node_modules/mocha/bin/mocha -b',
			start: 'node app.js',
			debug: 'node debug app.js'
		},
		main: 'app.js',
		repository: '',
		author: scope.author,
		license: ''
	};
};
