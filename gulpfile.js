const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

const ejs = require("gulp-ejs");
const rename = require("gulp-rename");
const replace = require("gulp-replace");

const browserSync = require('browser-sync');

// サーバーを立ち上げる
browserSync.init({
  server: './',
  files: './',
});

gulp.task("default", function() {
  gulp.watch("css/**/*.sass", gulp.series("sass"));
  gulp.watch("ejs/**/*.ejs", gulp.series("ejs"));
});

// Sass
gulp.task("sass", function() {
  return gulp.src('css/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 1 version', 'ie >= 11', 'iOS >= 10', 'Android >= 4.4'],
    }))
    .pipe(gulp.dest('css/style.css'));
});

// EJS
gulp.task("ejs", function() {
  return gulp.src(["ejs/**/*.ejs", '!' + "ejs/**/_*.ejs"])
    .pipe(ejs({}, {}, {
      ext: '.html'
    }))
    .pipe(rename({
      extname: ".html"
    }))
    .pipe(gulp.dest("./"));
});
