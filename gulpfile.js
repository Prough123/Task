const {
    src,
    dest,
    watch
} = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const gulpStylelint = require('gulp-stylelint');


function style() {
    return src('./app/scss/*.scss')
        .pipe(gulpStylelint({
            failAfterError: false,
            reporters: [{
                formatter: 'string',
                console: true
            }]
        }))
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(dest('./app/css/'))
        .pipe(browserSync.stream());
}

/* ПУТЬ К ФАЙЛУ ДОЛЖЕН БЫТЬ CSS/STYLE.CSS ОБЯЗАТЕЛЬНО БЛЯТЬ  */

function watcher() {
    browserSync.init({
        server: {
            baseDir: './app/'
        }
    })
    watch('./app/scss/*.scss', style);
    watch('./app/*.html').on('change', browserSync.reload);
};

exports.style = style;
exports.watch = watcher;