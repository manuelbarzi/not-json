'use strict';

var HJSON;
(function () {
    function parse(hjson) {
        var obj;

        eval('obj = ' + hjson);

        return obj;
    }

    HJSON = {
        parse,
        stringify: JSON.stringify
    };
})();

if (typeof module === 'object')
    module.exports = HJSON