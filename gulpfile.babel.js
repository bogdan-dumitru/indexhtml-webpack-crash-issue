import gulp from 'gulp';
import clean from 'gulp-rimraf';
import * as webpack from './lib/tasks/webpack.js';

gulp.task('webpack:dev', webpack.dev);
// gulp.task('webpack:prod', ['clean'], webpack.prod);
// gulp.task('index:dev', ['clean'], indexHtml.dev);
// gulp.task('index:prod', ['webpack:prod'], indexHtml.prod);
//
// gulp.task('copy:favicon', ['clean'], () => {
//   return gulp.src('./src/favicon.ico')
//     .pipe(gulp.dest('dist/'));
// });
//
// gulp.task('clean', () => {
//   return gulp.src('./dist', {read: false}).pipe(clean());
// });

gulp.task('dev', ['webpack:dev']); //, 'index:dev', 'copy:favicon']);
// gulp.task('prod', ['webpack:prod', 'index:prod', 'copy:favicon']);
