'use strict'
const mri = require('mri')

// node cli.js --name tj
const { name } = mri(process.argv.slice(2))

const jsers = {
  tj: ['express', 'koa', 'mocha', 'stylus', 'co'],
  sindersorhus: ['ava', 'chalk', 'xo', 'yaomen'],
  rauchg: ['socket.io', 'next.js'],
  kittens: ['babel', 'yarn'],
  gaearon: ['redux', 'creaet-react-app'],
  substack: ['browserify', 'tape'],
}

console.log(jsers[name] || jsers)
