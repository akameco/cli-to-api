#!/usr/bin/env node
'use strict'
const fs = require('fs')
const meow = require('meow')
const execa = require('execa')
const Listr = require('listr')
const { transformFileSync } = require('babel-core')
const { default: plugin } = require('babel-plugin-api-over-console')

const cli = meow(
  `
  Usage
    $ cli-to-api <input>

  Options
    --out-file, -o    The file path to write transformed file to
`,
  {
    alias: { o: 'out-file' },
  }
)

function error(msg) {
  console.error(msg)
  process.exit(1)
}

const input = cli.input[0]
const output = cli.flags.outFile
if (!input) {
  error('require target file path')
}

if (!output) {
  error('require output file path. Use --output, -o option')
}

const tasks = new Listr([
  {
    title: 'Install express with Yarn',
    task: (ctx, task) =>
      execa('yarn', ['add', 'express', 'cors']).catch(() => {
        ctx.yarn = false
        task.skip('Yarn not available, install it via `npm install -g yarn`')
      }),
  },
  {
    title: 'Install express with npm',
    enabled: ctx => ctx.yarn === false,
    task: () => execa('npm', ['install', '--save', 'express', 'cors']),
  },
  {
    title: `Build CLI app to ${output}`,
    task: () => {
      const { code } = transformFileSync(input, {
        babelrc: false,
        plugins: [plugin],
      })
      fs.writeFileSync(output, code.trim())
    },
  },
])

tasks.run().catch(error)
