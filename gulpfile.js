var gulp = require("gulp");
var less = require("gulp-less");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var ngAnnotate = require("gulp-ng-annotate");

var paths = {
	html: ["src/index.html", "src/app/**/*.html"],
	js: ["src/app/**/*module.js", "src/app/**/*.js"],
	less: ["src/less/bootstrap.less", "src/less/style.less", "src/less/**/*.less"]
}

gulp.task('build', ["js", "less", "html"]);

gulp.task('js', function () {
	return gulp.src(paths.js)
		.pipe(concat("app.js"))
		.pipe(ngAnnotate({
			add: true
		})).on("error", error)
		.pipe(uglify())
		.pipe(gulp.dest("build"));
});

gulp.task('less', function () {
	return gulp.src(paths.less)
		.pipe(concat("style.css"))
		.pipe(less({ compress: true })).on("error", error)
		.pipe(gulp.dest("build"));
});

gulp.task('html', function () {
	return gulp.src(paths.html).pipe(gulp.dest("build"));
});

gulp.task('watch', function () {
	gulp.start("build");
	gulp.watch(paths.js, ["js"]);
	gulp.watch(paths.less, ["less"]);
	gulp.watch(paths.html, ["html"]);
});

function error(err) {
    console.error("Error: " + err.plugin);
    console.error(err.message);

    this.emit("end");
}