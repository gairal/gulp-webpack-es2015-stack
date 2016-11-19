const gulp = require('gulp'),
runSequence = require('run-sequence');

gulp.task('compile', function (cb){
  'use strict';
  runSequence('build', ['copy:compile', 'imagemin:compile'], 'usemin', cb);
});
