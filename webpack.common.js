// @ts-check

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

/** @type { import('webpack').Configuration } */
module.exports = {
  entry: './src/index.js',
  plugins: [
    new MiniCSSExtractPlugin({
      filename: 'main.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/template.html',
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
