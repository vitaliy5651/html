const gulp = require ('gulp');
const sass = require ('gulp-sass');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

function style() {
    return gulp.src('src/scss/main.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
           baseDir: "./",
           index: "./index.html"
        }
    });
    gulp.watch('src/scss/**/*.scss', style)
    gulp.watch('index.html').on('change', browserSync.reload);
}

exports.watch = watch;


