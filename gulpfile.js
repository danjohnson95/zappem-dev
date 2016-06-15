var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('browserify');
var transform = require('vinyl-transform');

gulp.task('default', function(){
	gulp.run('scss');
    gulp.run('js');
    gulp.watch('./app/resources/scss/**/*.scss', ['scss']);
    gulp.watch('./app/resources/js/**/*.js', ['js']);
});

gulp.task('scss', function(){
	gulp.src('./app/resources/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('js', function(){
    var browserified = transform(function(filename){
        var b = browserify(filename);
        return b.bundle();
    });

    // gulp.src(['./app/resources/js/**/*.js'])
    //      .pipe(browserified);
    //      .pipe(gulp.dest('./public/js'));
});