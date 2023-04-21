const gulp = require('gulp');
const webp = require('gulp-webp');
const imagemin = import('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageResize = require('gulp-image-resize');
const rename = require('gulp-rename');

const imagePath = {
  src: './images_test/**/**/*.{jpg,jpeg,png}',
  dest: './images_test/',
}

const gulpIF = require('gulp-if');

gulp.task('webp', function () {
    return gulp.src(imagePath.src)

    // use below for testing purposes
    // .pipe(gulpIF("!**/*.webp", webp(), gulp.dest('onyWebp')))

    // use this version when satisfied it is working
    .pipe(gulpIF("!**/*.webp", webp()))

    .pipe(gulp.dest(function (file) {
        return file.base;
    }));
});

gulp.task('resize', () => {
    // specify different image sizes
    const sizes = [
        { width: 360, suffix: '360' }
    ];
    let stream;
    sizes.forEach((size) => {
        stream = gulp
        .src(imagePath.src)

        .pipe(gulpIF("!**/*-360.*", imageResize({ width: size.width })))
        .pipe(gulpIF("!**/*-360.*", rename((path) => {path.basename += `-${size.suffix}`;})))
        .pipe(gulp.dest(function (file) {
            return file.base;
        }));
    });
    return stream;
});

gulp.task('images', gulp.series('resize', 'webp'));