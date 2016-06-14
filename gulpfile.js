var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function(){
	gulp.run('scss');
    gulp.watch('./app/resources/scss/**/*.scss', ['scss']);
});

gulp.task('scss', function(){
	gulp.src('./app/resources/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});