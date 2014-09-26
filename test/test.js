var should = require('chai').should();
var expect = require('chai').expect;
var nunjucksdate = require('../index');
var getFilter = nunjucksdate;
var dateStringTest = '1995-12-25';

// Nunjucks environment
var nunjucks = require('nunjucks');
var env = new nunjucks.Environment();
var renderNunjucks = function(filter) {
    return env.renderString('{{ myDate| '+ ((filter) ? filter : 'date') +' }}', { "myDate": dateStringTest });
};

describe('#getFilter - 1st case - specified string.\n Uses default date format.', function() {
  it('converts  ' + dateStringTest + '  to 1995', function() {
    getFilter(dateStringTest).should.equal('1995');
  });
});

describe('#getFilter - 2nd case - specified string & meridiem=true.\n Uses default date format.', function() {
  it('converts  ' + dateStringTest + '  to 1995', function() {
    getFilter(dateStringTest, true).should.equal('1995');
  });
});

describe('#getFilter - 3rd case - specified string, format, & meridiem=true', function() {
  it('converts ' + dateStringTest + ' to 12-25-1995 a.m. ', function() {
    getFilter(dateStringTest, 'MM-DD-YYYY a',true).should.equal('12-25-1995 a.m.');
  });
});

describe('#getFilter - 4th case - specified string & format', function() {

  it('converts  ' + dateStringTest + '  to 12-25-1995', function() {
    getFilter(dateStringTest, 'MM-DD-YYYY').should.equal('12-25-1995');
  });

  it('converts ' + dateStringTest + ' to 12-25-1995 am', function() {
    getFilter(dateStringTest, 'MM-DD-YYYY a').should.equal('12-25-1995 am');
  });
});

describe('#setDefaultFormat', function() {
  it('sets default format to MMMM Do YYYY, h:mm:ss a', function() {
    nunjucksdate.setDefaultFormat('MMMM Do YYYY, h:mm:ss a').should.equal('MMMM Do YYYY, h:mm:ss a');
  });
});

describe('#install', function() {
  it('installs this plugin using default filter name of "date"', function() {
    nunjucksdate.install(env);
    console.log("\t The result is", renderNunjucks());
    expect(renderNunjucks()).to.be.a('string').and.equal('December 25th 1995, 12:00:00 am');
  });

  it('installs this plugin using custom filter name', function() {
    var filterName = 'customDate';
    nunjucksdate.install(env, filterName);
    console.log("\t The result is", renderNunjucks(filterName));
    expect(renderNunjucks(filterName)).to.be.a('string').and.equal('December 25th 1995, 12:00:00 am');
  });
});