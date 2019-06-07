import * as d3 from 'd3';

export const drawDiv = (selector) => {
    d3.select(selector)
        .append('div')
        .classed('dummy-div', true);
};