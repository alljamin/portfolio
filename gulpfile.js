'use strict';

var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync').create();
var concat       = require('gulp-concat');
var del          = require('del');
var gulp         = require('gulp');
var imagemin     = require('gulp-imagemin');
var rename       = require('gulp-rename');
var run          = require('gulp-run');
// var runSequence  = require('run-sequence');
var sass         = require('gulp-sass');
var uglify       = require('gulp-uglify');

gulp.task('clean', function() {
    return del(['_site', 'assets']);
});

gulp.task('build:scripts', function() {
    return gulp.src('_assets/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('assets/js'));
});

gulp.task('build:styles', function() {
    return gulp.src('_assets/styles/main.sass')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer({ 
            browsers: ['last 4 versions'] 
        }))
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('assets/styles'));
});

gulp.task('build:images', function() {
    return gulp.src('_assets/img/**/**.*')
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ], {
            // show the name of every optimized image
            verbose: true
        }))
        .pipe(gulp.dest('_assets/img'))
        .pipe(gulp.dest('assets/img'));
});

gulp.task('build:jekyll', function() {
    // --incremental regeneration doesn't update front matter
    // var shellCommand = 'jekyll build';

    return run('jekyll build').exec()
        // .pipe(gulp.dest(''))
    ;

    // return gulp.src('')
    //     .pipe(run('jekyll build'));
});

gulp.task('build', 
    gulp.series('clean', 
        gulp.parallel('build:scripts', 'build:styles', 'build:images'), 
        'build:jekyll'
    )
);

gulp.task('rebuild', gulp.series(['build'], function(){
    browserSync.reload();
}));

gulp.task('default', gulp.series(['build'], function() {

    // maybe important (injectChanges: true)
    browserSync.init({
        server: {
            baseDir: '_site'
        },
        open: true
    });

    gulp.watch(['_config.yml' , 
                '*.html', '_layouts/*.html', '_includes/*.html',
                '_pages/*.md', '_assets/**/**/*.*'], 
                gulp.series('rebuild'));
}));