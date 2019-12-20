'use strict';

var notJSON;
(function () {
    function parse(notJson) {
        var obj;

        eval('obj = ' + notJson);

        return obj;
    }

    notJSON = {
        parse,
        stringify: JSON.stringify
    };
})();

if (typeof module === 'object')
    module.exports = notJSON