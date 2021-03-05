const gulp = require ('gulp');
const sass = require ('gulp-sass');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.dev.js');



function js(){
    return gulp.src('src/js/index.js')
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulp.dest('./public/js'))
    .pipe(browserSync.stream());
}

function fonts(){
    return gulp.src('src/fonts/*')
     .pipe(gulp.dest('./public/fonts/'));
}

function style() {
    return gulp.src('src/scss/main.scss')
        .pipe(sass())
        // .pipe(cssnano())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
           baseDir: "./public",
           index: "../index.html"
        }
    });
    fonts();
    style();
    js();
    gulp.watch('src/js/**/*.js', js);
    gulp.watch('src/scss/**/*.scss', style)
    gulp.watch('index.html').on('change', browserSync.reload);
}

exports.watch = watch;
exports.fonts = fonts;
exports.js = js;


