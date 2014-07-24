var should = require('chai').should();
var nunjucksdate = require('../index');
var getFilter = nunjucksdate.getFilter;
var setDefaultFormat = nunjucksdate.setDefaultFormat;

describe('#getFilter', function() {
  it('converts Dec 25, 1995 to 12-25-1995', function() {
    getFilter('Dec 25, 1995', 'MM-DD-YYYY').should.equal('12-25-1995');
  });

  it('converts Dec 25, 1995 to 12-25-1995 am', function() {
    getFilter('Dec 25, 1995', 'MM-DD-YYYY a').should.equal('12-25-1995 am');
  });

  it('converts Dec 25, 1995 to 12-25-1995 a.m.', function() {
    getFilter('Dec 25, 1995', 'MM-DD-YYYY a',true).should.equal('12-25-1995 a.m.');
  });
});

describe('#setDefaultFormat', function() {
  it('sets default format to MMMM Do YYYY, h:mm:ss a', function() {
    setDefaultFormat('MMMM Do YYYY, h:mm:ss a').should.equal('MMMM Do YYYY, h:mm:ss a');
  });
});