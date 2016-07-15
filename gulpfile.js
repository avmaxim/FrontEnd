/**
 * Created by andrei.maksimchanka on 7/15/2016.
 * According to article  https://css-tricks.com/gulp-for-beginners/
 */

var gulp = require('gulp');                         //require statement tells Node to look into the node_modules folder for a package named gulp.
var browserSync = require('browser-sync').create();

gulp.task('watch', ['browserSync', 'track-index-html'], function(){
    gulp.watch('frontend/**/index.html', ['track-index-html']);
});

gulp.task('browserSync', function() { 
    browserSync.init({
        proxy: "localhost:8080/sample/FrontEnd-Tasks/frontend/LiveWebpage/"
    })
});

gulp.task('track-index-html', function(){
    return gulp
            .src('frontend/**/index.html')
            .pipe(
                browserSync.reload({
                    stream: true
                }));
});