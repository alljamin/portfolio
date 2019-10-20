'use strict';

var critical     = require('critical');
var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync').create();
var concat       = require('gulp-concat');
var del          = require('del');
var gulp         = require('gulp');
var imagemin     = require('gulp-imagemin');
var rename       = require('gulp-rename');
var run          = require('gulp-run');
var sass         = require('gulp-sass');
var uglify       = require('gulp-uglify');
var cache        = require('gulp-cache');

gulp.task('initial:clean', function() {
    return del(['_site', 'assets']);
});

gulp.task('clean:site', function() {
    return del('_site');
});

gulp.task('clean:scripts', function() {
    return del('assets/js');
});

gulp.task('clean:styles', function() {
    return del('assets/styles');
});

gulp.task('clean:images', function() {
    return del('assets/img');
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
        .pipe(autoprefixer())
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('assets/styles'));
});

gulp.task('build:images', function() {
    return gulp.src('_assets/img/**/**.*')
        .pipe(cache(
                imagemin([
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
                })
            )
        )
        .pipe(gulp.dest('assets/img'));
});

gulp.task('build:jekyll', function() {
    // --incremental regeneration doesn't update front matter
    // var shellCommand = 'jekyll build';

    return run('jekyll build').exec();

});

gulp.task('critical', function(done) {
    critical.generate({
        inline: true,
        base: '_site/',
        src: 'index.html',
        css: ['assets/styles/main.min.css'],
        dimensions: [{
            height: 200,
            width: 500
        }, {
            height: 900,
            width: 1200
        }],
        dest: 'index.html',
        minify: true,
        ignore: ['@font-face',/url\(/]
    })
    done();
});

gulp.task('browser-reload', function(done){
    browserSync.reload();
    done();
});

//initial build
gulp.task('build', 
    gulp.series('initial:clean', 
        gulp.parallel('build:scripts', 'build:styles', 'build:images'), 
        'build:jekyll', 'critical'
    )
);

//partial build styles
gulp.task('partial:build:styles', 
    gulp.series(
        ['clean:site', 'clean:styles'],
        'build:styles',
        'build:jekyll', 
        'critical',
        'browser-reload'
    )
);

//partial build scripts
gulp.task('partial:build:scripts', 
    gulp.series(
        ['clean:scripts'],
        'build:scripts',
        'build:jekyll', 
        'browser-reload'
    )
);

//partial build images
gulp.task('partial:build:img', 
    gulp.series(
        ['clean:images'],
        'build:images',
        'build:jekyll', 
        'browser-reload'
    )
);

gulp.task('default', gulp.series(['build'], function() {
    // maybe important (injectChanges: true)
    browserSync.init({
        server: {
            baseDir: '_site'
        },
        open: true
    });

    gulp.watch(['_config.yml' , 
                './index.html', 
                './404.html',
                '_layouts/*.html', 
                '_includes/*.html',
                '_pages/*.md',
                '_assets/styles/**/*.*'], 
                gulp.series(['partial:build:styles'])
            );
    gulp.watch(['_assets/scripts/**/*.*'], gulp.series(['partial:build:scripts']));
    gulp.watch(['_assets/img/**/*.*'], gulp.series(['partial:build:img']));
}));