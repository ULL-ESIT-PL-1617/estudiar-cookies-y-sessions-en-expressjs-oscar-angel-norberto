var gulp = require('gulp');

var exec = require('child_process').exec;



gulp.task('ejemploModuloCookie', function(cb){
	console.log("Puerto 3000");
	exec('node ejemplosCookies/ejemploCookie.js',function(err, stdout, stderr){
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
}); 