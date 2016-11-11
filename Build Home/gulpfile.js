var gulp = require("gulp");
var concat = require("gulp-concat");
var min_css = require("gulp-clean-css");
var uglify = require('gulp-uglify');
var clean = require("gulp-clean");
var sass = require("gulp-sass");

gulp.task('clean', ['clean:all']);

gulp.task('clean:all', function() {
    return gulp.src('dist/css')
        .pipe(clean({ force: true }))
});

gulp.task('sass', function() {
    return gulp.src("src/**/*.css")
        .pipe(sass().on('error', sass.logError))
        .pipe(concat("main-style.css"))
        .pipe(min_css())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', function () {
    return gulp.src('src/**/*.js')
        .pipe(concat('main-script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task("img", function() {
    return gulp.src("src/images/*")
        .pipe(gulp.dest("dist/images"));
});

gulp.task("fonts", function() {
    return gulp.src("src/fonts/*")
        .pipe(gulp.dest("dist/fonts"));
});

gulp.task("default", ['clean:all', 'sass', 'scripts', 'img', 'fonts']);

gulp.task('watch', function() {
    gulp.watch("src/js/**/*.js", ['scripts']);
    gulp.watch(["src/css/**/*.scss", "src/css/**/*.css"], ['sass']);
    gulp.watch("src/img/*", ['img']);
    gulp.watch("src/fonts/*", ['fonts']);

});
