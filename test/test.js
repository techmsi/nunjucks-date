var should = require('chai').should();
var nunjucksdate = require('../index');
var date = nunjucksdate.date;
var setDefaultFormat = nunjucksdate.setDefaultFormat;


describe('#date', function() {
  it('sets default format to MMMM Do YYYY, h:mm:ss a', function() {
    setDefaultFormat('MMMM Do YYYY, h:mm:ss a').should.equal('MMMM Do YYYY, h:mm:ss a');
  });

  it('converts Dec 25, 1995 to 12-25-1995', function() {
    date('Dec 25, 1995', 'MM-DD-YYYY').should.equal('12-25-1995');
  });

});