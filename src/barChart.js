import * as d3 from 'd3';

export const drawDiv = () => {
    d3.select('body')
        .append('div')
        .classed('dummy-div');
};