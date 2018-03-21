const assert = require('assert')
const fs = require('fs')
const HJSON = require('../src/HJSON')

describe('HJSON', () => {
    describe('parse JSON', () => {
        let json, obj

        before(() => {
            json = fs.readFileSync('tests/example.json', 'utf8')

            obj = HJSON.parse(json)
        })

        it('should parse JSON', () => {
            assert(obj, 'should obj be defined')

            assert.equal(obj.a, 1, 'should property match')
            assert.equal(obj.b, '2', 'should property match')
            assert.equal(obj.c, '3', 'should property match')
            
            assert(obj.d, 'should property match')
            assert.equal(obj.d.length, 3, 'should property match')
            assert.equal(obj.d[0], 1, 'should property match')
            assert.equal(obj.d[1], '2', 'should property match')
            assert.equal(obj.d[2], '3', 'should property match')
        })
    })

    describe('parse HJSON', () => {
        let hjson, obj

        before(() => {
            hjson = fs.readFileSync('tests/example.hjson', 'utf8')

            obj = HJSON.parse(hjson)
        })

        it('should parse HJSON', () => {
            assert(obj, 'should obj be defined')

            assert.equal(obj.a, 1, 'should property match')
            assert.equal(obj.b, '2', 'should property match')
            assert.equal(obj.c, '3', 'should property match')
            
            assert(obj.d, 'should property match')
            assert.equal(obj.d.length, 3, 'should property match')
            assert.equal(obj.d[0], 1, 'should property match')
            assert.equal(obj.d[1], '2', 'should property match')
            assert.equal(obj.d[2], '3', 'should property match')
        })
    })

    describe('stringify object', () => {
        let hjson, obj, json

        before(() => {
            hjson = fs.readFileSync('tests/example.hjson', 'utf8')

            obj = HJSON.parse(hjson)

            json = HJSON.stringify(obj)
        })

        it('should stringify object', () => {
            assert(json, 'should json be defined')

            assert.equal(json, '{"a":1,"b":"2","c":"3","d":[1,"2","3"]}', 'should json match')
        })
    })
})

