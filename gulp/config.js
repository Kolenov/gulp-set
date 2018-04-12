const src = './source/'
const dest = './static/'

// See https://github.com/isaacs/node-glob#glob-primer
// and https://gulpjs.com/docs/en/getting-started/explaining-globs/
// about '**/*' pattern

module.exports = {
  src: {
    root: src,
    html: src + 'views/',
    scss: src + 'scss/!(_*).scss',
    js: src + 'js/**/*',
    img: src + 'img/**/*',
    helpers: './gulp/helpers/',
    icons: src + 'icons/**/*.svg',
  },
  dest: {
    root: dest,
    css: dest + 'assets/css/',
    img: dest + 'assets/img/',
    js: dest + 'assets/js/',
    fonts: dest + 'assets/fonts/'
  },
  watch: {
    html: src + 'views/**/*',
    scss: src + 'scss/**/*',
    js: src + 'js/**/*.js',
    img: src + 'img/**/*',
    icons: src + 'icons/**/*',
  }
};
