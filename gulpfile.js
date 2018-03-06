const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const browserSync = require('browser-sync')
const shell = require('gulp-shell')

gulp.task('default', [
  'styles', 'webpack', 'browser-sync'
], () => {
  gulp.watch('./src/sass/**/*', ['styles'])
  gulp.watch('./src/js/**/*', ['webpack'])
  gulp.watch('./src/*.html', ['webpack'])
  gulp.watch(['./public/**/*', './public/*', '!public/scripts/.#*js', '!public/css/**/.#*css']).on('change', browserSync.reload)
})

gulp.task('styles', () => {
  gulp.src('src/sass/**/*.scss').pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)).pipe(autoprefixer({browsers: ['last 2 versions']})).pipe(gulp.dest('./public/css')).pipe(browserSync.stream())
})

gulp.task('browser-sync', ['styles'], function() {
  browserSync.init({server: './public', notify: false, open: false})
})
gulp.task('webpack', () => {
  return gulp.src('*.js', {read: false}).pipe(shell(['webpack && cp src/index.html public/index.html'])).pipe(browserSync.stream())
})
