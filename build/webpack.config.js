'use strict'

var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')

var extractTextWebpackPlugin = new ExtractTextPlugin('styles/[name].css')

module.exports = {
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    },
    'react-addons-css-transition-group': {
      root: 'ReactCSSTransitionGroup',
      commonjs2: 'react-addons-css-transition-group',
      commonjs: 'react-addons-css-transition-group',
      amd: 'react-addons-css-transition-group'
    }
  },
  entry: {
    'jmui': path.resolve(__dirname, '../src/index.js'),
    'jmui.ios.core': path.resolve(__dirname, '../src/styles/ios/jmui.less'),
    'jmui.ios.layout.dark': path.resolve(__dirname, '../src/styles/ios/layout/dark.less'),
    'jmui.ios.layout.white': path.resolve(__dirname, '../src/styles/ios/layout/white.less'),
    'jmui.ios.theme.gray': path.resolve(__dirname, '../src/styles/ios/theme/gray.less'),
    'jmui.ios.theme.white': path.resolve(__dirname, '../src/styles/ios/theme/white.less'),
    'jmui.ios.theme.black': path.resolve(__dirname, '../src/styles/ios/theme/black.less'),
    'jmui.ios.theme.green': path.resolve(__dirname, '../src/styles/ios/theme/green.less'),
    'jmui.ios.theme.lightblue': path.resolve(__dirname, '../src/styles/ios/theme/lightblue.less'),
    'jmui.ios.theme.orange': path.resolve(__dirname, '../src/styles/ios/theme/orange.less'),
    'jmui.ios.theme.pink': path.resolve(__dirname, '../src/styles/ios/theme/pink.less'),
    'jmui.ios.theme.red': path.resolve(__dirname, '../src/styles/ios/theme/red.less'),
    'jmui.ios.theme.yellow': path.resolve(__dirname, '../src/styles/ios/theme/yellow.less'),
    'jmui.ios.theme.blue': path.resolve(__dirname, '../src/styles/ios/theme/blue.less')
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, '../dist'),
    library: 'jmui',
    libraryTarget: 'umd'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.less$/,
        loader: extractTextWebpackPlugin.extract('style-loader', 'css-loader!less-loader')
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  eslint: {
    configFile: path.resolve(__dirname, '../.eslintrc')
  },
  resolve: {
    extensions: ['', '.js', '.json']
  },
  plugins: [
    extractTextWebpackPlugin,
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    })
  ]
}
