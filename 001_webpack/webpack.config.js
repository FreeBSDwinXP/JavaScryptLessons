'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './home.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'build.js',
    library: 'home'
  },
  
  watch: NODE_ENV == 'development',
  watchOptions: {
    aggregateTimeout: 100
  },
  devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null,
  
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      LANG: JSON.stringify("ru")
    })
  ],

  module: {
    rules: [{
      test: /\.m?js$/,
    loader: 'babel-loader'
    }]
  }
  
  
};


   