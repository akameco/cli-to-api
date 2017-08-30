## with mri

## Install

```
$ yarn
```

## Run as CLI
```
$ node cli.js --name tj
[ 'express', 'koa', 'mocha', 'stylus', 'co' ]
```

## Build

```
$ yarn build
```

## Run as API
```
$ node server.js
listening on 3000
```

```
$ curl localhost:3000?name=tj
["express","koa","mocha","stylus","co"]
```

## Deploy

```
$ up
```

```
$ curl `up url`?name=tj
["express","koa","mocha","stylus","co"]
```
