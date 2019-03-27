// const webpack = require('webpack');
const path = require('path');
const HtmlWepackPlugin = require('html-webpack-plugin');

const WEBPACK_COMMON_CONFIG = {
  entry: path.join(__dirname, 'examples/src/index.js'),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWepackPlugin({
      template: path.join(__dirname, 'examples/src/index.html'),
      filename: './index.html'
    })
  ],
  devtool: 'source-map'
};

module.exports = WEBPACK_COMMON_CONFIG;
