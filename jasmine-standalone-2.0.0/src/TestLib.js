(function(window){
    "use strict";
    var testLib = {};

    testLib.add = function (a, b) {
        return a + b;
    }

    testLib.subtract = function (a, b) {
        return a - b;
    }

    testLib.message = function (message) {
        return message;
    }

    window.TestLib = testLib;

}(window));
