# cli-to-api [![Build Status](https://travis-ci.org/akameco/cli-to-api.svg?branch=master)](https://travis-ci.org/akameco/cli-to-api)

[![Greenkeeper badge](https://badges.greenkeeper.io/akameco/cli-to-api.svg)](https://greenkeeper.io/)

> transform cli to JSON API Server

[![https://gyazo.com/304c28e7e55f9506374121bbe6de5364](https://i.gyazo.com/304c28e7e55f9506374121bbe6de5364.png)](https://gyazo.com/304c28e7e55f9506374121bbe6de5364)


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

### Run as CLI

```
$ node cli.js
{ lang: 'JavaScript' }
```

### Transform

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
  res.json({lang: 'JavaScript'});
});
app.listen(port, () => {
  console.log('listening on %s', port);
});
```


### Run as Server

```
$ node server.js
listening on 3000
```

```
$ curl localhost:3000
{
  "lang": "JavaScript"
}
```

See examples.

## License

MIT © [akameco](http://akameco.github.io)
