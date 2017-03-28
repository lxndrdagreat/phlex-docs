var gulp        = require('gulp'),
browserSync     = require('browser-sync'),
runSequence     = require('run-sequence'),
sass            = require('gulp-sass'),
run             = require('gulp-run'); // used to execture Phlex (a Python script)

/* Just run 'gulp' */
gulp.task('default', ['watch']);
gulp.task('init', function(cb) {
    runSequence(
        'sass',
        'phlex', cb
    );
});
gulp.task('watch', ['browserSync', 'init'], function (){
    /* watch task that watches Phlex's .yd files, as well as .html
     * files to catch changes with templates.
     */
    gulp.watch('src/**/*.+(yd|html)', ['phlex', browserSync.reload]);

    /* watch task for sass file changes */
    gulp.watch('src/sass/**/*.scss', ['sass', browserSync.reload]);
});

gulp.task('browserSync', function() {
    browserSync.init({
        notify: false,
        server: { baseDir: 'docs' }
    });
});

/* Stylesheets */
gulp.task('sass', function(){
    return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./docs'));
});

/* This will run Phlex.
 * Currently, all files will be reprocessed. This can still be
 * executed relatively fast. Was tested with 1000 files.
 */
gulp.task('phlex', function (){
    return run('phlex -o ./docs').exec();
});