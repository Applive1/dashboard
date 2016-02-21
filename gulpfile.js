var gulp = require('gulp');
var runSequence = require('run-sequence');
var open = require('gulp-open');
var express = require('gulp-express');

var serverOptions = {
	root: 'public',
	port: 8000,
	livereload: true,
};

var tasks = {
	startWebServer: 'Start-WebServer',
	openBrowser: 'Open-Browser',
};

// Main task
gulp.task('default', function () {
	runSequence(
		tasks.startWebServer,
		tasks.openBrowser);
});

// starts web server
gulp.task(tasks.startWebServer, function () {
	//connect.server(serverOptions);

	return express.run([
        'server.js'
    ]);
});

gulp.task(tasks.openBrowser, function () {
	gulp.src('public/index.html')
  		.pipe(open('', { url: 'http://localhost:' + serverOptions.port }));
});
