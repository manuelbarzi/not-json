function parse(jon) {
    var obj
    eval('obj = ' + jon)
    return obj
}

if (typeof module === 'object')
    module.exports = {
        parse,
        stringify: JSON.stringify
    }