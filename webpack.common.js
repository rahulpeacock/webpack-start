// @ts-check

const path = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

/** @type { import('webpack').Configuration } */
module.exports = {
  entry: './src/index.js',
  plugins: [
    new MiniCSSExtractPlugin({
      filename: 'main.css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/template.html'),
    }),
    new CopyPlugin({
      patterns: [{ from: path.resolve(__dirname, 'public') }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [MiniCSSExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
};
