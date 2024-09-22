// @ts-check

const path = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

/** @type { import('webpack').Configuration } */
module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/index.js'),
    about: path.resolve(__dirname, 'src/scripts/about.js'),
    contact: path.resolve(__dirname, 'src/scripts/contact.js'),
    vendor: path.resolve(__dirname, 'src/vendor.js'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
      chunks: ['index', 'vendor'],
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: path.resolve(__dirname, 'src/pages/about.html'),
      chunks: ['about', 'vendor'],
    }),
    new HtmlWebpackPlugin({
      filename: 'contact.html',
      template: path.resolve(__dirname, 'src/pages/contact.html'),
      chunks: ['contact', 'vendor'],
    }),
    new CopyPlugin({
      patterns: [{ from: path.resolve(__dirname, 'public') }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCSSExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        exclude: /node_modules/,
      },
    ],
  },
};
