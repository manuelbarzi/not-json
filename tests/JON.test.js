const assert = require('assert')
const fs = require('fs')
const JON = require('../src/JON')

describe('JON', () => {
    describe('parse JSON', () => {
        let json, obj

        before(() => {
            json = fs.readFileSync('tests/example.json', 'utf8')

            obj = JON.parse(json)
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

    describe('parse JON', () => {
        let jon, obj

        before(() => {
            jon = fs.readFileSync('tests/example.jon', 'utf8')

            obj = JON.parse(jon)
        })

        it('should parse JON', () => {
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
        let jon, obj, json

        before(() => {
            jon = fs.readFileSync('tests/example.jon', 'utf8')

            obj = JON.parse(jon)

            json = JON.stringify(obj)
        })

        it('should stringify object', () => {
            assert(json, 'should json be defined')

            assert.equal(json, '{"a":1,"b":"2","c":"3","d":[1,"2","3"]}', 'should json match')
        })
    })
})

