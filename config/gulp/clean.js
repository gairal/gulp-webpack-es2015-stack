var conf = require('../config.json');
var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function (cb) {
  'use strict';
  return del([conf.base.build, conf.base.compile], cb);
});
