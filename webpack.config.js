"use strict";

var webpack = require('webpack');
const path = require('path');
var loaders = require('./tools/webpack.loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');
// var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
require("babel-polyfill");

// const extractSass = new ExtractTextPlugin({
//     // filename: "public/[name].[contenthash].css",
//     filename: "public/[name].css",
//     disable: process.env.NODE_ENV === "development",
//     allChunks: true
// });

// loaders.push({
//   test: /\.scss$/,
//   loader: extractSass.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] }),
//   exclude: ['node_modules']
// });

module.exports = {
  context: path.resolve(__dirname, 'src/assets/javascript'),
  entry: {
    main: ["babel-polyfill", './index.js'],
  },
  output: {
    path: path.resolve(__dirname, '.tmp/assets/javascript'),
    filename: 'index.js',
  },
  debug: true,
  devtool: "source-map",
  module: {
    loaders
  },
};
