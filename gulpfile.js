var bs = require('browser-sync').create();
var gulp = require('gulp');

gulp.task('week1', function() {
  bs.init({
    watch: true,
    server: {
      baseDir: "./docs",
      index: "week1.html"
    },
    port: 8001
  });
});

gulp.task('week2', function() {
  bs.init({
    watch: true,
    server: {
      baseDir: "./docs",
      index: "week2.html"
    },
    port: 8002
  });
});

gulp.task('week3', function() {
  bs.init({
    watch: true,
    server: {
      baseDir: "./docs",
      index: "week3.html"
    },
    port: 8003
  });
});
