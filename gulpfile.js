const gulp = require('gulp');
const del = require('del');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

// 静态服务器
gulp.task('server', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});
gulp.task('clean', function () {
  return del(['dist/**/*', 'dist']);
})
gulp.task('build', ['clean'], function () {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: [
        ['env', {
          // modules: false,
        }]
      ]
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/'));
});
gulp.task('default', ['build'], function () {
  console.log('success');
})