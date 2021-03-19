const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // '@babel/preset-react' - transforms react code (jsx)
            // '@babel/preset-env' - transforms ES versions to latest browser support
            presets: ['@babel/preset-react', '@babel/preset-env'],
            // '@babel/plugin-transform-runtime' - enables some ES features in browsers (async await for example)
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
