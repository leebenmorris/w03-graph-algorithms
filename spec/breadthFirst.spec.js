const expect = require('chai').expect;
const breadthFirstSearch = require('../lib/breadthFirstSearch');
const Graph = require('../lib/graphs')
const testGraph = new Graph()
//console.log(testGraph)

describe('breadthFirstSearch', function () {
  it('is a function', function () {
    expect(breadthFirstSearch).to.be.a('function');
  });
  it('random test', function () {
    let actual = breadthFirstSearch(testGraph, 'A', 'F')
    expect(actual).to.equal(true);
  });
});