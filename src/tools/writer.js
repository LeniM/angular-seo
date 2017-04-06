"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Writer = (function () {
    function Writer() {
    }
    Writer.write = function (message) {
        console.log(message);
    };
    Writer.error = function (message) {
        console.error(message);
    };
    Writer.info = function (message) {
        console.info(message);
    };
    return Writer;
}());
exports.Writer = Writer;
