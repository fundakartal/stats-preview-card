const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const { src, dest } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

function style() {
  return gulp.src('./scss/style.scss')
    .pipe(sass().on('error', sass.logError)) 
    .pipe(autoprefixer({
			cascade: false
		}))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}
function watch() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./scss/**/*.scss', style)
  gulp.watch('./*.html').on('change', browserSync.reload);
}
exports.style = style;
exports.watch = watch;
exports.default = watch;