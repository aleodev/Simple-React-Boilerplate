const path = require('path');
const webpack = require('webpack');
const VENDOR_LIBS = ['redux', 'react-redux', 'react-dom']

module.exports = {
  entry: {
    index: './src/js/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/scripts')
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: "initial",
          minChunks: 3,
          maxInitialRequests: 10, //
          minSize: 5 //
        },
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          priority: 10,
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              'es2015', {
                modules: false
              }
            ],
            'stage-0',
            'react'
          ]
        }
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  }
};
