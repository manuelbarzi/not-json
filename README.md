# not JavaScript Object Notation (notJSON) parser / stringifier

Parses not-JSON like:

```js
{ a: 1, b: "2", c: '3', "d": [1, "2", '3'] }
```

Installation:

```sh
$ npm i not-json
```

Usage:

```js
var notJSON = require('not-json')

var obj = notJSON.parse('{ a: 1, b: "2", c: \'3\', "d": [1, "2", \'3\'] }')

console.log(obj)
// { a: 1, b: '2', c: '3', d: [ 1, '2', '3' ] }

var json = notJSON.stringify(obj)

console.log(json)
// {"a":1,"b":"2","c":"3","d":[1,"2","3"]}
```