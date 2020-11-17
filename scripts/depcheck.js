#!/usr/bin/env node

// already included in node_modules when developing/building
const depcheck = require('depcheck'); // eslint-disable-line import/no-extraneous-dependencies
const path = require('path');


const projectFolder = path.resolve(__dirname, '../');
const options = {};

depcheck(projectFolder, options, ({ dependencies }) => {
  if (dependencies.length) {
    console.error('Found unused dependencies:', dependencies);
    process.exit(1);
  } else {
    console.info('The project doesn\'t contain unused dependencies');
    process.exit(0);
  }
});
