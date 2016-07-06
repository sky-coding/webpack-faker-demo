const webpack = require('webpack');
const helpers = require('./helpers');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const ProvidePlugin = require('webpack/lib/ProvidePlugin');

const METADATA = {
  title: 'Demo',
  baseUrl: '/',
  isDevServer: helpers.isWebpackDevServer()
};

module.exports = {

  metadata: METADATA,

  entry: {
    'main':      './src/index.js'
  },

  resolve: {
    extensions: ['', '.js', '.json'],
    root: helpers.root('src'),
    modulesDirectories: ['node_modules']
  },

  module: {
    preLoaders: [

      {
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          helpers.root('node_modules/faker')
        ]
      }

    ],

    loaders: [

    ]

  },


  plugins: [

    new ForkCheckerPlugin(),

    new webpack.optimize.OccurenceOrderPlugin(true),

    new CopyWebpackPlugin([{
      from: 'src/assets',
      to: 'assets'
    }]),

    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunksSortMode: 'dependency'
    }),

  ],

  node: {
    global: 'window',
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }

};
