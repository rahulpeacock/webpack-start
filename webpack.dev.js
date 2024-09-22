// @ts-check

const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

/** @type { import('webpack').Configuration } */
const devConfig = {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    clean: true,
    assetModuleFilename: 'assets/[name].[ext]',
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: '[name].css',
    }),
  ],
  devServer: {
    watchFiles: ['src/*.html'],
    hot: true,
    compress: true,
    port: 3000,
  },
};

module.exports = merge(commonConfig, devConfig);
