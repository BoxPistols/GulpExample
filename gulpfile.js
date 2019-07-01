var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");

var ejs = require("gulp-ejs");
var rename = require("gulp-rename");
var replace = require("gulp-replace");

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
    .pipe(gulp.dest('./css'));
});

// EJS
gulp.task("ejs", function() {
  return gulp.src(["ejs/**/*.ejs", '!' + "ejs/**/_*.ejs"])
    .pipe(ejs({}, {}, {
      ext: '.html'
    }))
    .pipe(rename({ extname: ".html" }))
    .pipe(gulp.dest("./"));
});
