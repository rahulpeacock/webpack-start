// @ts-check

const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

/** @type { import('webpack').Configuration } */
const prodConfig = {
  mode: 'production',
  output: {
    filename: '_app/static/chunks/[name].[contenthash].bundle.js',
    clean: true,
    assetModuleFilename: 'assets/[name].[hash][ext]',
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: '_app/static/css/[name].[contenthash].css',
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
