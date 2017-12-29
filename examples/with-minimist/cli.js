#!/usr/bin/env node
'use strict'
const parse = require('minimist')

// node cli.js --name tj
const { name } = parse(process.argv.slice(2))

const jsers = {
  tj: ['express', 'koa', 'mocha', 'stylus', 'co'],
  sindersorhus: ['ava', 'chalk', 'xo', 'yaomen'],
  rauchg: ['socket.io', 'next.js'],
  kittens: ['babel', 'yarn'],
  gaearon: ['redux', 'creaet-react-app'],
  substack: ['browserify', 'tape'],
}

console.log(jsers[name] || jsers)
