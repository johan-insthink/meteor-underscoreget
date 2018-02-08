Package.describe({
  name: 'insthink:underscore-get',
  version: '0.0.1',
  summary: 'Safe property getter for nested attributes for Meteor JS framework (Server/Client)',
  git: 'https://github.com/johan-insthink/meteor-underscoreget',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6');
  api.use('ecmascript');
  api.use('underscore');
  api.mainModule('underscore-get.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('insthink:underscore-get');
  api.mainModule('underscore-get-tests.js');
});
