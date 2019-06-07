const d3 = require('d3');
const barChart = require('./barChart').default;

const data = [];

const bar = barChart();
let container = d3.select('.container');

container.datum(data).call(bar);
