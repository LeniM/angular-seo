import { Writer } from '../src/tools/writer';
import * as chai from 'chai';
import * as sinon from 'sinon';

const assert = chai.assert;

describe('Writer', () => {
    describe('#write()', () => {
        it('should write a message', () => {
            let spy = sinon.spy(console, 'log');
            Writer.write('I am being tested!');
            assert(spy.calledWith('I am being tested!'));
            spy.restore();
        });
    });
});
