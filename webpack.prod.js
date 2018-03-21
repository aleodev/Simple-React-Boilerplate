const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('./webpack.config.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(config, {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                minimize: true
              }
            }, {
              loader: "sass-loader",
              options: {
                sourceMap: true,
                minimize: true
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin({sourceMap: true}),
    new ExtractTextPlugin({filename: '../css/main.css', allChunks: true}),
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')}),
    new CopyWebpackPlugin([{
        from: path.resolve(__dirname, 'src/assets'),
        to: path.resolve(__dirname, 'public/assets')
      },
    {
      from: path.resolve(__dirname, 'src/index.html'),
      to: path.resolve(__dirname, 'public')
    }
    ])
  ]
})
