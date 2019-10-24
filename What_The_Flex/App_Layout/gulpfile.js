var gulp = require('gulp');
// Includes the entire gulp library

var autoprefixer = require('gulp-autoprefixer');
//Includes the auto-prefixer plugin. 

//a gulp task take a name and a function to run.
gulp.task('styles', function () {
    //To grab all folders and files of css type in a specific folder, you can use 'folderName/**/*.css'
    gulp.src('*.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('build'))
    //You pipe the contents of the file determined above into autoprefixer.
    //You also pipe them into another file.
});

gulp.task('test', function () {
    gulp.watch('*.css', gulp.series('styles'));
    //Watching all the file types listed, and running the tasks listed between [] when they do.
});