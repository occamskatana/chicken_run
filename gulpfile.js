var gulp = require('gulp');
var watch = require('gulp-watch');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var inject = require('gulp-inject');
var wiredep = require('wiredep').stream;
var clean = require('gulp-clean');
var minify = require('gulp-minify');

gulp.task('watch', function(){
	gulp.watch('./**/*.js', ['js'])
	gulp.watch('./dev/*.html', ['html'])
	gulp.watch('./dev/*.scss', ['scss'])
})

gulp.task('clean', [], function(){
	return gulp.src('./dist')
				.pipe(clean());
})

gulp.task('build', ['js', 'html', 'scss', 'distindex'], function(){

})

gulp.task('wipe', ['clean', 'build'])

gulp.task('js', [], function(){
	return gulp.src('dev/*.js')
		.pipe(minify({
			ext: {
				src:'-debug.js',
				min:'.js'
			},
			ignoreFiles: ['.combo.js', '-min.js']
		}))
		.pipe(gulp.dest('dist/js'))
		.pipe(connect.reload());
})

gulp.task('html', [], function(){
	return gulp.src('dev/*.html')
				.pipe(gulp.dest('dist'))
				.pipe(connect.reload());
})

gulp.task('scss', [], function(){
	return gulp.src('./dev/*.scss')
				 .pipe(sass().on('error', sass.logError))
				 .pipe(gulp.dest('dist/styles'))
				 .pipe(connect.reload())
})

gulp.task('distindex', [], function(){
	var target = gulp.src('./dev/index.html');
	var sources = gulp.src(['./dist/**/*.js', './dist/**/*.css'], {read: true})
	return target
					.pipe(inject(sources))
					.pipe(wiredep())
					.pipe(gulp.dest('./dist/'));
})

gulp.task('webserver', function(){
	connect.server({
		livereload: true,
		port: 3000,
		host: 'localhost',
		root: '.'
	});
})

gulp.task('start', ['build', 'webserver', 'watch'])