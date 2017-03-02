var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var gitbook = require('gitbook');
var Q = require('q');
var exec = require('child_process').exec;

gulp.task('build', function(){
	var book = new gitbook.Book('./docs',{
		config:{
			output:'./_book'
		}
	});
	return Q(book.parse())
	.then(function() {
		return book.generate('website');
	})
});

gulp.task('deploy', function(){
	return gulp.src('./docs/**/*')
		.pipe(ghPages())

});

gulp.task('serve', function(cb){
	exec('nohup sudo -b node index.js',function(err, stdout, stderr){
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
}); 
