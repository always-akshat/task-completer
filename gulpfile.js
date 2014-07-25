/**
 * Created by vaibhav on 7/21/14.
 */
// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngmin = require('gulp-ngmin');
var stripDebug = require('gulp-strip-debug');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');



// Concatenate & Minify JS
gulp.task('app1', function() {
    return gulp.src(['app/scripts/app.js','app/scripts/services/*.js','app/scripts/controllers/*.js'])
        .pipe(concat('app1.js'))
        .pipe(ngmin())
        .pipe(stripDebug())
        .pipe(gulp.dest('app/build/scripts/'));

});

gulp.task('app', function() {
    return gulp.src(['app/bower_components/angular/angular.js','app/scripts/jquery-1.11.1.min.js','app/bootstrap/js/bootstrap.min.js','app/scripts/enscroll-0.6.0.min.js','app/bower_components/angular-route/angular-route.js',
        'app/bower_components/angular-animate/angular-animate.js','app/bower_components/AngularJS-Toaster/toaster.js','app/bower_components/angular-loading-bar/build/loading-bar.js','app/bower_components/underscore/underscore.js',
        'app/bower_components/ng-file-upload/angular-file-upload.js','app/scripts/ekko-lightbox.js','app/scripts/viber-scripts.js'])

        .pipe(concat('app.js'))
        .pipe(ngmin())
        .pipe(uglify())
        .pipe(stripDebug())
        //.pipe(uglify({outSourceMap: true}))
        .pipe(gulp.dest('app/build/scripts/'));

});

gulp.task('mix' ,function(){
    return gulp.src(['app/build/scripts/app.js','app/build/scripts/app1.js'])
        .pipe(concat('final.js'))
        .pipe(gulp.dest('app/build/scripts/'));
});

gulp.task('styles', function() {
    gulp.src(['app/css/viber-theme.css'])
        .pipe(concat('styles.css'))
        .pipe(autoprefix('last 2 versions'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('app/build/styles/'));
});

// Default Task
gulp.task('default', ['app','app1','mix', 'styles']);