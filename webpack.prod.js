// @ts-check

const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');

/** @type { import('webpack').Configuration } */
const prodConfig = {
  mode: 'production',
  output: {
    filename: 'main.[contenthash].js',
    clean: true,
    assetModuleFilename: 'assets/[name].[hash][ext]',
  },
};

module.exports = merge(commonConfig, prodConfig);
