const gulp = require("gulp");
const watch = require("gulp-watch");
const browserSync = require("browser-sync").create();


gulp.task('watch', () => {

    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    watch('./app/index.html', () => {
        browserSync.reload();
    });

    watch(["./app/assets/styles/**/*.scss", "./app/assets/styles/**/*.css"], function() {
        gulp.start("injectCSS");
    });
});

gulp.task("injectCSS", ["styles", "icons"], () => {
    return gulp.src("./app/assets/temp/styles/styles.css")
        .pipe(browserSync.stream());
});
