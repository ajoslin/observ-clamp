# observ-clamp [![Build Status](https://travis-ci.org/ajoslin/observ-clamp.svg?branch=master)](https://travis-ci.org/ajoslin/observ-clamp)

> Clamp an observable number between two values


## Install

```
$ npm install --save observ-clamp
```


## Usage

```js
var ObservClamp = require('observ-clamp')

var number = ObservClamp(0, -5, 5)

number() // => 0

number.set(-10)
number() // => -5

number.set(10)
number() // => 5

number.set(3)
number() // => 3
//=> output
```

## API

#### `ObservClamp(initial, min, max)` -> `observable`

Returns an [Observ](https://github.com/raynos/observ) instance where value can never go lower than `min` or higher than `max`.

## License

MIT © [Andrew Joslin](http://ajoslin.com)
