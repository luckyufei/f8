var path = require('path')

module.exports = function (config) {
  config.set({
    basePath: '../',
    frameworks: ['mocha', 'chai'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      {
        pattern: './test/test-bundler.js',
        watched: false,
        served: true,
        included: true
      }
    ],

    preprocessors: {
      './test/test-bundler.js': ['webpack', 'sourcemap']
    },

    webpack: {
      devtool: 'inline-source-map',
      resolve: {
        alias: {
          'sinon': 'sinon/pkg/sinon',
          'jmui': path.resolve(__dirname, '../src')
        }
      },
      module: {
        noParse: [
          /node_modules\/sinon\//
        ],
        preLoaders: [
          {
            test: /\.(js|jsx)$/,
            include: path.resolve(__dirname, '../src'),
            loader: 'isparta',
            exclude: /node_modules/
          }
        ],
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
              presets: ['es2015', 'react', 'stage-0']
            }
          },
          {
            test: /\.json$/,
            loader: 'json'
          }
        ]
      },
      externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window',
        'text-encoding': 'window'
      }
    },

    webpackMiddleware: {
      noInfo: true
    },

    plugins: [
      'karma-webpack',
      'karma-coverage',
      'karma-mocha',
      'karma-chai',
      'karma-mocha-reporter',
      'karma-sourcemap-loader',
      'karma-phantomjs-launcher'
    ],
    reporters: ['mocha', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    coverageReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'lcov', subdir: 'lcov' }
      ]
    }
  })
}
