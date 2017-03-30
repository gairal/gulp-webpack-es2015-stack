const conf = require('../config.json'),
  gulp = require('gulp'),
  webpack = require('gulp-webpack'),
  eslint = require('gulp-eslint'),
  webpackDevConfig = require('../webpack.conf.dev');
  webpackProdConfig = require('../webpack.conf.prod');

function js (config) {
  'use strict';
  return gulp.src([conf.base.src + conf.files.js])
  .pipe(eslint({configFile: './.eslintrc.json'}))
  .pipe(eslint.format())
  .pipe(webpack(config))
  .pipe(gulp.dest(conf.base.build + conf.path.js));
}

gulp.task('js:build', function() {
  'use strict';
  return js(webpackDevConfig);
});

gulp.task('js:release', function() {
'use strict';
return js(webpackProdConfig);
});
