const gulp = require('gulp');
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');

const name = 'funico';

gulp.task('default', function() {
    gulp.src(['icons/*svg'])
        .pipe(iconfontCss({
            fontName: name,
            fontPath: '../fonts/',
            cssClass: 'fi',
            targetPath: '../styles/funico.css'
        }))
        .pipe(iconfont({
            fontName: name,
            formats: ['ttf', 'eot', 'woff', 'woff2', 'svg']
        }))
        .pipe(gulp.dest('dist/fonts/'));
});