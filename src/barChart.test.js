import * as d3 from 'd3'
import {drawDiv} from './barChart';

describe('a dumb test', function() {

    // adds an html fixture to the DOM
    beforeEach(() => {
        const fixture = '<div id="fixture"><div class="container"></div></div>';

        document.body.insertAdjacentHTML('afterbegin', fixture);
    });

    // remove the html fixture from the DOM
    afterEach(function() {
        document.body.removeChild(document.getElementById('fixture'));
    });

    it('is dumb', function() {
        expect('dumb').toEqual('dumb');
    });

    it('is super dumb', function() {
        const expected = 1;
        let actual;

        drawDiv('.container');
        actual = d3.select('.dummy-div').size();

        expect(actual).toEqual(expected);
    });
});