# Hybrid JavaScript Object Notation (HJSON) parser / stringifier

Parses hybrid JSON like:

```js
{ a: 1, b: "2", c: '3', "d": [1, "2", '3'] }
```

Usage:

```js
var obj = HJSON.parse('{ a: 1, b: "2", c: \'3\', "d": [1, "2", \'3\'] }')

console.log(obj)
// { a: 1, b: '2', c: '3', d: [ 1, '2', '3' ] }
```