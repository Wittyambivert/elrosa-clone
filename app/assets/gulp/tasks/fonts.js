const gulp = require("gulp");

gulp.task("icons", () => {
    return gulp.src("../../../../node_modules/@fortawesome/fontawesome-free/webfonts/*")
        .pipe(gulp.dest("../../temp/styles"));
});
