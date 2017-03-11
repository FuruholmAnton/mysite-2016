'use strict';
const gulp = require('gulp');

const swPrecache = require('sw-precache');

gulp.task('generate-service-worker', function(callback) {
  writeServiceWorkerFile(true, callback);
});

// Service Worker
function writeServiceWorkerFile(handleFetch, callback) {

  var packageJson = require('package-json');
  var path = require('path');
  var rootDir = "dist";

  var config = {
    cacheId: packageJson.name,
    // If handleFetch is false (i.e. because this is called from generate-service-worker-dev), then
    // the service worker will precache resources but won't actually serve them.
    // This allows you to test precaching behavior without worry about the cache preventing your
    // local changes from being picked up during the development cycle.
    handleFetch: handleFetch,
    // logger: $.util.log,
    runtimeCaching: [{
      // See https://github.com/GoogleChrome/sw-toolbox#methods
      urlPattern: /runtime-caching/,
      handler: 'networkFirst',
      // See https://github.com/GoogleChrome/sw-toolbox#options
      options: {
        cache: {
          maxEntries: 1,
          name: 'runtime-cache'
        }
      }
    }],
    staticFileGlobs: [
      rootDir + '/assets/css/**.css',
      rootDir + '/**.html',
      rootDir + '/assets/images/**.*',
      rootDir + '/assets/js/**.js'
    ],
    stripPrefix: rootDir + '/',
    // verbose defaults to false, but for the purposes of this demo, log more.
    verbose: true
  };

  swPrecache.write(path.join(rootDir, 'service-worker.js'), config, callback);
}
