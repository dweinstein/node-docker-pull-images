#!/usr/bin/env node
'use strict';
const rc = require('rc');
const getImages = require('.');
const path = require('path');
const cfg = rc('pull_images', {
  help: false,
  infile: undefined
}, require('minimist')(process.argv.slice(2), {
  alias: {
    h: 'help',
    i: 'infile'
  },
  boolean: [ 'help' ]
}));

const usage = `Usage:
  ${process.argv[1]} [options]
  Options:
    -i, --infile  [path]    path to json images to pull.
    -h, --help              help
`;

if (cfg.help) {
  console.log(usage);
  process.exit(0);
} else if (!cfg.infile) {
  console.error(usage);
  process.exit(1);
}

function main (args) {
  const res = getImages(args.images);
  res.stdout.pipe(process.stdout);
  res.stderr.pipe(process.stderr);
}

if (require.main === module) {
  const opts = {
    images: require(cfg.infile[0] !== '/' ? path.resolve(cfg.infile) : cfg.infile)
  };
  main(opts);
}
