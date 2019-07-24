/* global describe, it, expect */
const nunjucksdate = require('../src/index');
const getFilter = nunjucksdate;
const dateStringTest = '1995-12-25';

// Nunjucks environment
const nunjucks = require('nunjucks');
const env = new nunjucks.Environment();

const renderNunjucks = filter =>
  env.renderString(`{{ myDate|  ${filter || 'date'} }}`, {
    myDate: dateStringTest
  });

describe('#getFilter [default] - 1st case - Render date with default format.', () => {
  it(`converts ${dateStringTest} to 1995`, () => {
    const expectedDate = getFilter(dateStringTest);

    expect(expectedDate).toEqual('1995');
  });
});

describe('#getFilter [default][meridiem] - 2nd case - Render date with default format & with meridiem.', () => {
  it(`converts ${dateStringTest} to 1995`, () => {
    const expectedDate = getFilter(dateStringTest, true);

    expect(expectedDate).toEqual('1995');
  });
});

describe('#getFilter [format][meridiem]  - 3rd case - Render date with specified format & with meridiem.', () => {
  it(`converts ${dateStringTest} to 12-25-1995 a.m.`, () => {
    const expectedDate = getFilter(dateStringTest, 'MM-DD-YYYY a', true);

    expect(expectedDate).toEqual('12-25-1995 a.m.');
  });
});

describe('#getFilter [format] - 4th case - Render date with specified format.', () => {
  it(`converts ${dateStringTest} to 12-25-1995`, () => {
    const expectedDate = getFilter(dateStringTest, 'MM-DD-YYYY');

    expect(expectedDate).toEqual('12-25-1995');
  });

  it(`converts ${dateStringTest} to 12-25-1995 am`, () => {
    const expectedDate = getFilter(dateStringTest, 'MM-DD-YYYY a');

    expect(expectedDate).toEqual('12-25-1995 am');
  });
});

describe('#setDefaultFormat', () => {
  it('sets default format to MMMM Do YYYY, h:mm:ss a', () => {
    const format = 'MMMM Do YYYY, h:mm:ss a';
    const expectedFormat = nunjucksdate.setDefaultFormat(format);

    expect(expectedFormat).toEqual(format);
  });
});

describe('#install', () => {
  it('installs this plugin using default filter name of "date"', () => {
    nunjucksdate.install(env);

    const expectedDate = renderNunjucks();
    const actualDate = 'December 25th 1995, 12:00:00 am';

    expect(typeof expectedDate).toBe('string');
    expect(expectedDate).toEqual(actualDate);
  });

  it('installs this plugin using custom filter name', () => {
    var filterName = 'customDate';
    nunjucksdate.install(env, filterName);

    const expectedDate = renderNunjucks(filterName);
    const actualDate = 'December 25th 1995, 12:00:00 am';

    expect(typeof expectedDate).toBe('string');
    expect(expectedDate).toEqual(actualDate);
  });
});
