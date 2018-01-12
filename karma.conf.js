// Karma configuration
// Generated on Fri Jan 12 2018 08:30:22 GMT-0800 (PST)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jquery-3.2.1', 'jasmine', 'browserify'],
    files: [
      'js/*.js',
      'spec/*-spec.js',
      'bower_components/moment/moment.js'
    ],
    exclude: [
    ],
    preprocessors: {
      'js/*.js': [ 'browserify'],
      'spec/*.js': ['browserify']
    },
    plugins: [
      'karma-jquery',
      'karma-browserify',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-jasmine-html-reporter'
    ],
    browserify: {
      debug: true,
      transform: [ [ 'babelify', {presets: ["es2015"]} ] ]
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
