// @ts-check

const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');

/** @type { import('webpack').Configuration } */
const devConfig = {
  mode: 'development',
  output: {
    filename: 'main.js',
    clean: true,
  },
  devServer: {
    watchFiles: ['src/*.html'],
    hot: true,
    compress: true,
  },
};

module.exports = merge(commonConfig, devConfig);
