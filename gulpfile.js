const gulp = require('gulp');
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');

const name = 'funico';

gulp.task('default', async () => {
    gulp.src(['icons/*.svg'])
        .pipe(iconfontCss({
            fontName: name,
            cssClass: 'fi',
            fontPath: '../fonts/',
            targetPath: '../all.css',
        }))
        .pipe(iconfont({
            fontName: name,
            formats: ['ttf', 'eot', 'woff', 'woff2', 'svg']
        }))
        .pipe(gulp.dest('dist/fonts/'));
});