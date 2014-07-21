/**
 * Created by vaibhav on 7/21/14.
 */
// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');
var rename = require('gulp-rename');
var ngmin = require('gulp-ngmin');
var stripDebug = require('gulp-strip-debug');



// Concatenate & Minify JS
gulp.task('app', function() {
    return gulp.src(['../app/scripts/*.js','../app/scripts/services/*.js','../app/scripts/controllers/*.js', '../app/*.js'])
        .pipe(concat(app.js))
        .pipe(ngmin())
        //.pipe(uglify({outSourceMap: true}))
        .pipe(stripDebug())
        //.pipe(uglify({outSourceMap: true}))
        .pipe(gulp.dest('app/build/scripts/'));

});

gulp.task('app', function() {
    return gulp.src(['./app/scripts/jquery-1.11.1.min.js','./app/bootstrap/js/bootstrap.min.js','./app/scripts/enscroll-0.6.0.min.js','../app/bower_components/angular/angular.js','../app/bower_components/angular-route/angular-route.js',
        '../app/bower_components/angular-animate/angular-animate.js','../app/bower_components/AngularJS-Toaster/toaster.js','../app/bower_components/angular-loading-bar/build/loading-bar.js','../app/bower_components/underscore/underscore.js',
        '../app/bower_components/ng-file-upload/angular-file-upload.js','../app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js','../app/scripts/ekko-lightbox.js','../app/scripts/viber-scripts.js','../app/scripts/iframetracker.js',
        '../app/scripts/app.js','../app/scripts/services/*.js','../app/scripts/controllers/*.js', '../app/*.js'])

        .pipe(concat(app.js))
        .pipe(ngmin())
        //.pipe(uglify({outSourceMap: true}))
        .pipe(stripDebug())
        //.pipe(uglify({outSourceMap: true}))
        .pipe(gulp.dest('app/build/scripts/'));

});


// Default Task
gulp.task('default', ['app']);