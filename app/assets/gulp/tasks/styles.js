const gulp = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const importCSS = require("postcss-import");
const autoprefixer = require("autoprefixer");



gulp.task("styles", () => {
    return gulp.src("./app/assets/styles/styles.scss")
        .pipe(sass())
        .pipe(postcss([importCSS, autoprefixer]))
        .on("error", sass.logError)
        .pipe(gulp.dest("./app/assets/temp/styles"));
});