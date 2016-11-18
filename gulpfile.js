// *** Note: I built a separate Sass compiler that runs via npm that works independently

let gulp  = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    uglifycss = require('gulp-uglifycss'), 
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    livereload = require('gulp-livereload');

// JS minifying 
gulp.task('compress', function() {  
    gulp.src('./src/scripts/main.js')
    .pipe(babel())
    .pipe(rename('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/scripts'));
});

// CSS minifying
gulp.task('css', function () {
  gulp.src('./src/**/*.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./public/css'));
});

// Default watch for all changes & reload
gulp.task('default', function() {
  livereload.listen();
  gulp.watch('./src/**/*.css', ['css']);
  gulp.watch('./src/scripts/main.js', ['compress']);
});




