const assert = require('assert')
const fs = require('fs')
const notJSON = require('.')

describe('notJSON', () => {
    describe('parse JSON', () => {
        let json, obj

        before(() => {
            json = fs.readFileSync('example.json', 'utf8')

            obj = notJSON.parse(json)
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

    describe('parse not-JSON', () => {
        let notJson, obj

        before(() => {
            notJson = fs.readFileSync('example.not-json', 'utf8')

            obj = notJSON.parse(notJson)
        })

        it('should parse not-JSON', () => {
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
        let notJson, obj, json

        before(() => {
            notJson = fs.readFileSync('example.not-json', 'utf8')

            obj = notJSON.parse(notJson)

            json = notJSON.stringify(obj)
        })

        it('should stringify object', () => {
            assert(json, 'should json be defined')

            assert.equal(json, '{"a":1,"b":"2","c":"3","d":[1,"2","3"]}', 'should json match')
        })
    })
})

