const gulp = require("gulp");
const sass = require("gulp-sass");

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
