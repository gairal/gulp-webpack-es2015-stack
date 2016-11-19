var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function (cb) {
  'use strict';
  runSequence('build', 'browser-sync:build', 'watch', cb);
});

gulp.task('run:compile', function (cb) {
  'use strict';
  runSequence('compile', 'browser-sync:compile', cb);
});
