const gulp = require('gulp');

// Translate Javascript
gulp.task("webpack", () => {
    const webpack = require('webpack-stream');
    const config = require('./webpack.config.js');

    gulp.src("./js/**/*.js")
        .pipe(webpack(config))
        .pipe(gulp.dest("../www/js"));
});

// Compile Less -> css
gulp.task("less", () => {
    const less = require('gulp-less');
    gulp.src("./less/*.less")
        .pipe(less())
        .pipe(gulp.dest("../www/css"));
});

// Default
gulp.task("default", ["webpack", "less"]);

