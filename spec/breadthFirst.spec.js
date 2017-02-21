const expect = require('chai').expect;
const breadthFirstSearch = require('../lib/breadthFirstSearch');

describe('breadthFirstSearch', function () {
    it('is a function', function () {
        expect(breadthFirstSearch).to.be.a('function');
    });
});