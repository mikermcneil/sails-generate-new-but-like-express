/**
 * Module dependencies
 */

var _ = require('lodash');



/**
 * sails-generate-new-but-like-express
 *
 * Usage:
 * `sails generate new foo --but-like-express`
 *
 * @type {Object}
 */

module.exports = {

  targets: {

    './:appPath/app.js': { copy: 'app.js' },
    './:appPath/public/javascripts': { folder: {} },
    './:appPath/public/javascripts/sails.io.js': { copy: 'public/javascripts/sails.io.js' },
    './:appPath/public/stylesheets': { folder: {} },
    './:appPath/public/images': { folder: {} },
    './:appPath/routes': { folder: {} },
    './:appPath/routes/index.js': { template: 'routes/index.js' },
    './:appPath/routes/user.js': { template: 'routes/user.js' },
    './:appPath/views': { folder: {} },
    './:appPath/views/index.jade': { template: 'views/index.jade' },
    './:appPath/views/layout.jade': { template: 'views/layout.jade' },
    './:appPath/package.json': { jsonfile: function (scope) {
      return {
        name: scope.appName,
        'private': true,
        version: '0.0.0',
        description: 'a Sails application (but like Express)',
        dependencies: {
          'sails'     : '~0.10.0',
          'sails-disk'  : '~0.10.0',
          'jade'      : '*'
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
    } }
  },


  before: function(scope, cb) {

    // Validate custom scope variables which
    // are required by this generator.
    if (!scope.rootPath) {
      return cb(new Error(
        'Missing scope variable: `rootPath`\n' +
        'Please make sure it is specified and try again.'
      ));
    }
    // Determine default values based on the
    // available generator scope.
    _.defaults(scope, {
      author: 'a Node.js/Sails.js Contributor',
      year: (new Date()).getFullYear(),
      appName: (scope.args[0] === '.' || !scope.args[0]) ? path.basename(process.cwd()) : scope.args[0],
    });
    scope.appPath = scope.args[0] || '.';

    // Trigger callback with no error to proceed.
    cb();
  },

  templatesDirectory: require('path').resolve('./templates')
};
