const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const webpackConfig = withModuleFederationPlugin({

  remotes: {
    // "mfe1": "http://localhost:3000/remoteEntry.js",    
    "userListMFE": "userListMFE@http://localhost:3000/_next/static/chunks/remoteEntry.js",
    "user-followers": "user-followers@http://localhost:4201/remoteEntry.js",
    "user-detail": "user-detail@http://localhost:4202/remoteEntry.js",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});


module.exports = {
  ...webpackConfig,
  output: {
    ...webpackConfig.output,
    scriptType: 'text/javascript'
  }
};