'use strict'
const fs = require('fs')

fs.readFile('data.json', 'utf8', (_, data) => {
  console.log(JSON.parse(data))
})
