//load plugins ======== create zjj ;
let gulp = require('gulp'),
    sass = require('gulp-sass'),
    util = require('gulp-util'),
    notify = require('gulp-notify'),
    autoprefixer = require('gulp-autoprefixer'),
    argv = require('optimist').argv,
    plumber = require('gulp-plumber'),
    path = require('path');

const basePath = '../src';

gulp.task('scss', function(){
    return gulp.src(path.join(__dirname, basePath, 'style/src/index.scss'))
        .pipe(plumber())
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 20 versions']}))
        .pipe(gulp.dest(path.join(__dirname, basePath, 'style/dist')))
        .pipe(notify("Found file: <%= file.relative %>!"))
        .on("error", notify.onError(function (error) {
            return "Message to the notifier: " + error.message;
        }))
});

gulp.task('watch', function(){
    gulp.watch(path.join(__dirname, basePath, 'style/src/**'), ['scss'])
});


gulp.task('default', argv.watch && ['watch']);