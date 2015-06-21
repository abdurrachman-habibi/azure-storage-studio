var gulp = require('gulp');

gulp.task('lib-js', function () {
    return gulp.src([
        'bower_components/angular/angular.min.js',
        'bower_components/angular-route/angular-route.min.js',
        'bower_components/angular-animate/angular-animate.min.js',
        'bower_components/angular-aria/angular-aria.min.js',
        'bower_components/angular-touch/angular-touch.min.js',
        'bower_components/angular-material/angular-material.min.js',
        'bower_components/angular-local-storage/dist/angular-local-storage.min.js',
        'bower_components/angular/angular.min.js.map',
        'bower_components/angular-route/angular-route.min.js.map',
        'bower_components/angular-animate/angular-animate.min.js.map',
        'bower_components/angular-aria/angular-aria.min.js.map',
        'bower_components/angular-touch/angular-touch.min.js.map',
        'bower_components/angular-material/angular-material.min.js.map',
        'bower_components/angular-local-storage/dist/angular-local-storage.min.js.map'
    ])
        .pipe(gulp.dest('src/lib/js'))
});

gulp.task('lib-css', function() {
    return gulp.src([
        'bower_components/angular-material/angular-material.min.css',
        'bower_components/components-font-awesome/css/font-awesome.min.css'
    ])
        .pipe(gulp.dest('src/lib/css'))
});

gulp.task('default', ['lib-js', 'lib-css'], function(){});