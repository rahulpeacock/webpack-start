// @ts-check

const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');

/** @type { import('webpack').Configuration } */
const devConfig = {
  mode: 'development',
  output: {
    filename: 'main.js',
    clean: true,
    assetModuleFilename: 'assets/[name].[ext]',
  },
  devServer: {
    watchFiles: ['src/*.html'],
    hot: true,
    compress: true,
    port: 3000,
  },
};

module.exports = merge(commonConfig, devConfig);
