Package.describe({
  name: 'abiabsurd:flow-routing-react',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Fork of useraccounts:flow-routing Meteor package for use with React only.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/abiabsurd/flow-routing-react.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

// Package.onUse(function(api) {
//   api.versionsFrom('1.3.1');
//   api.use('ecmascript');
//   api.mainModule('flow-routing-react.js');
// });

// Package.onTest(function(api) {
//   api.use('ecmascript');
//   api.use('tinytest');
//   api.use('abiabsurd:flow-routing-react');
//   api.mainModule('flow-routing-react-tests.js');
// });

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.3.1');

  api.use([
    'check',
    'kadira:flow-router',
    'underscore',
    'useraccounts:core',
  ], ['client', 'server']);

  api.imply([
    'kadira:flow-router@2.11.0',
    'useraccounts:core@1.14.2',
  ], ['client', 'server']);

  api.use([
     'react@0.14.8',
     'react-mounter@1.1.0',
     // 'kadira:blaze-layout@2.3.0',
     'gadicc:blaze-react-component@1.1.1'
     // 'kadira:react-layout@1.5.2',
     // 'gwendall:blaze-to-react@0.1.2'
  ], ['client', 'server'], { weak: true });

  api.addFiles([
    'lib/core.js',
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/client.js',
    'lib/client/templates_helpers/at_input.js',
  ], ['client']);
});
