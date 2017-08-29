# cli-to-api [![Build Status](https://travis-ci.org/akameco/cli-to-api.svg?branch=master)](https://travis-ci.org/akameco/cli-to-api)

> transform cli to api


## Install

```
$ npm install --save-dev cli-to-api
```


## Usage

#### In

cli.js

```
console.log({ lang: 'JavaScript' })
```

### Run

```
$ cli-to-api -o server.js cli.js
```

#### Out

server.js

```js
const express = require('express');

const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.get('/', (req, res) => {
  res.json(`hello`);
});
app.listen(port, () => {
  console.log('listening on %s', port);
});
```

## License

MIT © [akameco](http://akameco.github.io)
