# @hugsmidjan/gulp-utils

```
npm install --save-dev @hugsmidjan/gulp-utils
```

## Usage

```js
const [cssBundlem, cssWatch] = require('@hugsmidjan/gulp-utils')(opts);
```

## API / Advanced usage

```js
const {
  prefixGlobs, // (globs: string[], src: string) => string[]
  // Takes an array of src-relative globs and prefixes them with src

  normalizeOpts, // <D = {}>(userOpts: {}, defaultOpts: D) => D
  // Shallow merges userOptions with defaultOpts.
  // Normalizing scr, dist, glob

  notifyError, // (error: string | { message: string; [key: string]: any }) => void
  // Sends the error.message to node-notifier to pop a toast message

  notifyPipeError, // () => GulpPlumberInstance
  // Feeds plumber event to `notifyError`
  // Usage:  `src(glob).pipe(notifyPipeError())`.

  gulpReplace, // shortcut to the `gulp-replace` module
} = require('@hugsmidjan/gulp-utils');
```
