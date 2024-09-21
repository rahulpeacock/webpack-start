// @ts-check

const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');

/** @type { import('webpack').Configuration } */
const prodConfig = {
  mode: 'production',
  output: {
    filename: 'main.[contenthash].js',
    clean: true,
  },
};

module.exports = merge(commonConfig, prodConfig);
