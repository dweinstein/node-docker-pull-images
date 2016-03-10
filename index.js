'use strict';

const through = require('through2');
const spawn = require('child_process').spawn;
const async = require('async');
const c = require('chalk');

module.exports = getImages;

function getImages (images) {
  const stdio = {
    stdout: through(),
    stderr: through()
  };

  async.mapSeries(images, function (image, done) {
    console.log(c.green('pulling docker image'), image);
    const name = `${ image.name }${ image.tag ? (':' + image.tag) : ''}`;
    const ps = spawn('docker', ['pull', name], { });
    ps.on('exit', function (code) {
      if (code !== 0) {
        console.warn('failed to pull image');
      }
      done();
    });
    ps.stdout.pipe(stdio.stdout);
    ps.stderr.pipe(stdio.stderr);
  });

  return stdio;
}

