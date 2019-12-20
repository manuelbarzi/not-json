const notJson = '{ a: 1, b: "2", c: \'3\', "d": [1, "2", \'3\'] }'

const obj = notJSON.parse(notJson)

console.log(`notJSON.parse('${notJson}') =>`, obj) // { a: 1, b: '2', c: '3', d: [ 1, '2', '3' ] }

const json = notJSON.stringify(obj)

console.log(`notJSON.stringify({ a: 1, b: '2', c: '3', d: [ 1, '2', '3' ] }) =>`, json) // {"a":1,"b":"2","c":"3","d":[1,"2","3"]}