let project_folder = 'dist';
let source_folder = 'src';
let fs = require('fs');

let path = {
    build: {
        html: project_folder + '/',
        css: project_folder + '/css/',
        js: project_folder + '/js/',
        image: project_folder + '/image/',
        fonts: project_folder + '/fonts/',
    },
    src: {
        html: [source_folder + '/*.jade', '!' + source_folder + '/_*.jade'],
        css: source_folder + '/sass/*.{sass,css}',
        js: source_folder + '/js/*.js',
        image: source_folder + '/image/**/*.{jpg,jpeg,png,svg,gif,ico,webp}',
        fonts: source_folder + '/fonts/*.ttf',
    },
    watch: {
        html: source_folder + '/**/*.jade',
        css: source_folder + '/sass/**/*.sass',
        js: source_folder + '/js/**/*.js',
        image: source_folder + '/image/**/*.{jpg,jpeg,png,svg,gif,ico,webp}'
    },
    clean: './' + project_folder + '/'
}

let {src, dest} = require('gulp')
let gulp = require('gulp')
let browsersync = require('browser-sync').create()
let fileinclude = require('gulp-file-include')
let jade = require('gulp-jade')
let del = require('del')
let sass = require('gulp-sass')
let autoprefixer = require('gulp-autoprefixer')
let group_media = require('gulp-group-css-media-queries')
let clean_css = require('gulp-clean-css')
let rename = require('gulp-rename')
let uglify = require('gulp-uglify-es').default

function browserSync(params) {
    browsersync.init({
        server: {
            baseDir: './' + project_folder
        },
        port: 5000,
        notify: false
    })
}

function html() {
    return src(path.src.html)
        .pipe(jade())
        .pipe(fileinclude())
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}

function css() {
    return src(path.src.css)
        .pipe(
            sass({
                outputStyle: "expanded"
            })
        )
        .pipe(
            group_media()
        )
        .pipe(
            autoprefixer({
                cascade: true
            })
        )
        // .pipe(dest(path.build.css))
        .pipe(clean_css())
        .pipe(
            rename({
                extname: '.min.css'
            })
        )
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream())
}

function js() {
    return src(path.src.js)
        .pipe(fileinclude())
        .pipe(dest(path.build.js))
        .pipe(uglify())
        .pipe(
            rename({
                extname: '.min.js'
            })
        )
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream())
}

function images() {
    return src(path.src.image)
        .pipe(dest(path.build.image))
        .pipe(browsersync.stream())
}

function fonts() {
    return src(path.src.fonts)
    .pipe(dest(path.build.fonts))
}

function watchFiles() {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.image], images);
}

function clean() {
    return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(js, css, html, images, fonts));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;