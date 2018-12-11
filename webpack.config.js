
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
	resolve: {
		extensions: ['.ts', '.js']
	},
  module: {
		rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: { allowTsInNodeModules: true }
      },
    ]
  }
};