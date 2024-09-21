const path = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.[contenthash].js',
    clean: true,
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: 'main.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
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
