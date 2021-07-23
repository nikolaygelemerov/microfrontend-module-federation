const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJSON = require('../package.json');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 9001,
    historyApiFallback: {
      index: 'index.html'
    },
    open: true
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: { './MarketingApp': './src/bootstrap' },
      shared: packageJSON.dependencies
    })
  ]
};

module.exports = merge(commonConfig, devConfig);
