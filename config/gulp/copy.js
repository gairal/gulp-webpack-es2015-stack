const conf = require('../config.json'),
gulp = require('gulp');

gulp.task('copy:build', function () {
  'use strict';
  //Root files
  gulp.src([
    conf.base.src + conf.path.root + conf.files.root,
    conf.base.src + conf.path.root + conf.files.hidden
  ])
  .pipe(gulp.dest(conf.base.build));
  //Fonts + Translations files + images
  gulp.src([
    conf.base.src + conf.path.fonts + conf.files.fonts,
    conf.base.src + conf.path.i18n + conf.files.i18n,
    conf.base.src + conf.path.images + conf.files.images
  ], {base: './' + conf.base.src})
  .pipe(gulp.dest(conf.base.build));

  //Scripts
  gulp.src(conf.vendor.js, {base: './'})
  .pipe(gulp.dest(conf.base.build));

  return gulp.src(conf.vendor.assets, {base: './'})
  .pipe(gulp.dest(conf.base.build));
});

gulp.task('copy:compile', function () {
  'use strict';
  //Root files
  gulp.src([
    conf.base.src + conf.path.root + conf.files.root,
    conf.base.src + conf.path.root + conf.files.hidden
  ])
  .pipe(gulp.dest(conf.base.compile));
  //Fonts + images
  gulp.src([
    conf.base.src + conf.path.fonts + conf.files.fonts
  ], {base: './' + conf.base.src})
  .pipe(gulp.dest(conf.base.compile));

  //node packages assets
  return gulp.src(conf.vendor.assets, {base: './'})
  .pipe(gulp.dest(conf.base.compile));
});
