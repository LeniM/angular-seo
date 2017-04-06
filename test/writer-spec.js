"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var writer_1 = require("../src/tools/writer");
var chai = require("chai");
var sinon = require("sinon");
var assert = chai.assert;
describe('Writer', function () {
    describe('#write()', function () {
        it('should write a message', function () {
            var spy = sinon.spy(console, 'log');
            writer_1.Writer.write('I am being tested!');
            assert(spy.calledWith('I am being tested!'));
            spy.restore();
        });
    });
});
