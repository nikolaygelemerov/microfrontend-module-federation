const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJSON = require('../package.json');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 9000,
    historyApiFallback: {
      index: 'index.html'
    },
    open: true
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: 'marketing@http://localhost:9001/remoteEntry.js'
      },
      shared: packageJSON.dependencies // share libraries between container and module (marketing)
    })
  ]
};

module.exports = merge(commonConfig, devConfig);
