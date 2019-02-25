const gulp = require('gulp');
const rename = require('gulp-rename');
const watch = require('gulp-watch');
const print = require('gulp-print').default;
const postcss = require('gulp-postcss');
const cached = require('gulp-cached');
const plumber = require('gulp-plumber');
const scss = require('postcss-scss');
const cssVariables = require('./miniprogram/common/css_variables');
const cssMixins = require('./miniprogram/common/css_mixins');

const configs = {
  INPATH: {
    'style': '**/*.css'
  },
  OUTPATH: {
    'style': './'
  },
  processors: [
    // require('postcss-import'),
    require('postcss-strip-inline-comments'),                     // 祛除样式内的注释
    require('postcss-mixins')({ mixins: cssMixins }),             // mixins
    require('postcss-extend'),                                    // extend
    require('postcss-simple-vars')({ variables: cssVariables }),  // 变量
    require('postcss-nested'),                                    // 嵌套
    require('postcss-color-function'),                            // 处理颜色
  ]
};

gulp.task('wxss', () => {
  // gulp 4.0 以上需用 return 返回 否则报错
  return gulp.src(configs.INPATH.style)
    .pipe(plumber({
      errorHandler: (error) => {
        console.log(`wxss TASK ERROR: ${error}`);
      }
    }))
    .pipe(cached('wxss'))
    .pipe(postcss(configs.processors, { syntax: scss }))
    .pipe(rename((path) => {
      path.extname = '.wxss';
    }))
    .pipe(gulp.dest(configs.OUTPATH.style));
});

/* 监听css变化 */
gulp.task('wxss:watch', (done) => {
watch(configs.INPATH.style)
    .pipe(plumber({
      errorHandler: (error) => {
        console.log(`wxss:watch TASK ERROR:  ${error}`);
      }
    }))
    // .pipe(cached('wxss'))
    .pipe(postcss(configs.processors, { syntax: scss }))
    .pipe(rename((path) => {
      path.extname = '.wxss';
    }))
    .pipe(gulp.dest(configs.OUTPATH.style))
    .pipe(print(filepath => `built: ${filepath}`));

  done();
});

// gulp 4.0 后任务依赖使用 ['task1', 'task2'] 这种会报错，需使用新 API: gulp.series 与 gulp.parallel
gulp.task('default', gulp.series('wxss', 'wxss:watch'));
