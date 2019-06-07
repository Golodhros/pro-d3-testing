import * as d3 from 'd3'
import {drawDiv} from './barChart';

describe('a dumb test', function() {

    it('is dumb', function() {
        expect('dumb').toEqual('dumb');
    });

    it('is dumb', function() {
        const expected = 1;
        let actual;

        drawDiv();
        actual = d3.select('.dummy-div').size();

        expect(actual).toEqual(expected);
    });
});