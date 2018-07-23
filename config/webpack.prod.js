const webpack = require('webpack');
const merge = require('webpack-merge');

const helpers = require('./helpers');
const commonConfig = require('./webpack.common');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(commonConfig, {
  mode: 'production',

  output: {
    filename: 'js/[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      
    ]
  },
  optimization: {
    minimizer: [
        //https://github.com/mishoo/UglifyJS2/tree/harmony
        new UglifyJsPlugin({
            parallel: 4,
            sourceMap: false,
            uglifyOptions: {


                output: {
                    comments: false
                },
                minify: {},
                compress: false,
                mangle: false
            }
        }),
    ]
  },

  
});
