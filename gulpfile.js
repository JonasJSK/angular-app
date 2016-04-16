var gulp = require("gulp");

gulp.task('build', function() {
	return gulp.src('src/index.html')
	  		 .pipe(gulp.dest('build'));
});