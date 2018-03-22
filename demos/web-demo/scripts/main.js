const hjson = '{ a: 1, b: "2", c: \'3\', "d": [1, "2", \'3\'] }'

const obj = HJSON.parse(hjson)

console.log(`Parsing string ${hjson} results in object`, obj) // { a: 1, b: '2', c: '3', d: [ 1, '2', '3' ] }

const json = HJSON.stringify(obj)

console.log(`Stringifying object { a: 1, b: '2', c: '3', d: [ 1, '2', '3' ] } results in string`, json) // {"a":1,"b":"2","c":"3","d":[1,"2","3"]}