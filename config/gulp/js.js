const conf = require('../config.json'),
options = require('./options'),
pkg = require('../../package.json'),
gulp = require('gulp'),
webpack = require('gulp-webpack'),
eslint = require('gulp-eslint'),
webpackConfig = require('../webpack.conf');

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('js:build', function() {
  'use strict';
  gulp.src([conf.base.src + conf.files.js])
  .pipe(eslint({configFile: './config/.eslintrc.json'}))
  .pipe(eslint.format())
  .pipe(webpack(webpackConfig))
  .pipe(gulp.dest(conf.base.build + conf.path.js));
});
