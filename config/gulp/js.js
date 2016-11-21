const conf = require('../config.json'),
  gulp = require('gulp'),
  webpack = require('gulp-webpack'),
  eslint = require('gulp-eslint'),
  webpackConfig = require('../webpack.conf');

gulp.task('js:build', function() {
  'use strict';
  return gulp.src([conf.base.src + conf.files.js])
  .pipe(eslint({configFile: './.eslintrc.json'}))
  .pipe(eslint.format())
  .pipe(webpack(webpackConfig))
  .pipe(gulp.dest(conf.base.build + conf.path.js));
});
