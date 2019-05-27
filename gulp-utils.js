// Options handling

const normalizeOpts = (userOpts, defaultOpts) => {
  const opts = { ...defaultOpts, ...userOpts };
  opts.src = (opts.src + '/').replace(/\/\/$/, '/');
  opts.dist = (opts.dist + '/').replace(/\/\/$/, '/');
  if (typeof opts.glob === 'string') {
    opts.glob = [opts.glob];
  }
  return opts;
};

const prefixGlobs = (globs, src) => globs.map((glob) => src + glob);

// Error handing

const notifyError = (error) => {
  const errmsg = (typeof error !== 'string' && error.message) || error;
  require('node-notifier').notify({
    title: 'Error',
    message: errmsg,
  });
  console.error(errmsg);
};

const notifyPipeError = () => require('gulp-plumber')(notifyError);

const makeDir = (path, stripFileName) =>
  require('mkdirp').sync(stripFileName ? path.replace(/\/[^/]+$/, '') : path);

module.exports = {
  normalizeOpts,
  notifyError,
  notifyPipeError,
  prefixGlobs,
  gulpReplace: require('gulp-replace'),
  makeDir,
};
