# Hybrid JavaScript Object Notation (HJSON) parser / stringifier

Parses hybrid JSON like:

```js
{ a: 1, b: "2", c: '3', "d": [1, "2", '3'] }
```

Installation:

```sh
$ npm i hybrid-json
```

Usage:

```js
var HJSON = require('hybrid-json')

var obj = HJSON.parse('{ a: 1, b: "2", c: \'3\', "d": [1, "2", \'3\'] }')

console.log(obj)
// { a: 1, b: '2', c: '3', d: [ 1, '2', '3' ] }

var json = HJSON.stringify(obj)

console.log(json)
// {"a":1,"b":"2","c":"3","d":[1,"2","3"]}
```