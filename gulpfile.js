const gulp = require("gulp");
const sass = require("gulp-sass");

// ejs
var rename = require("gulp-rename");
var ejs = require("gulp-ejs");
var replace = require("gulp-replace");

gulp.task("ejs", (done) => {
  gulp
    .src(["ejs/**/*.ejs", "!" + "ejs/**/_*.ejs"])
    .pipe(ejs({}, {}, {ext:'.html'}))
    .pipe(rename({ extname: ".html" }))
    .pipe(gulp.dest("./"));
  done();
});

gulp.task("default", function() {
  return gulp.watch("css/**/*.sass", function() {

    return (
      gulp
      .src("css/**/*.sass")
      .pipe(
        sass({
          outputStyle: "expanded"
        })
        .on("error", sass.logError)
      )
      .pipe(gulp.dest("css"))
    );
  });
});
