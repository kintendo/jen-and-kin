'use strict';

var gulp = require('gulp');
var fs = require("fs");
var browserify = require("browserify");

gulp.task('build', function() {
  browserify('src/main.js')
    .transform('babelify', {presets: ['es2015', 'react']})
    .bundle()
    .pipe(fs.createWriteStream('public/js/bundle.js'));
});

gulp.task('watch', function () {
  gulp.watch('src/*', ['build']);
});
