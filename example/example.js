// Import nunjucks
var nunjucks = require('nunjucks');

// Import the plugin
var nunjucksDate = require('nunjucks-date');
var moment = require('moment');

// Define a custom default date format. Any valid format works.
// The date format defaults to "YYYY"
// http://momentjs.com/docs/#/displaying/format/
nunjucksDate.setDefaultFormat('MMMM Do YYYY, h:mm:ss a');

// Initialize your Nunjucks enironment
var env = new nunjucks.Environment();

// Pass the environment & a custom filter name
nunjucksDate.install(env, 'mySpecialDateFilter');

// Print out environment filters to ensure filter is present
console.log('Now your filter should be listed here: ', env.filters);

// Example Usage
var dateStringTest = '1995-12-25';
var currentDate = env.renderString(` 
  Present: {{ present | mySpecialDateFilter}} & Past: {{ past }}
`, { 
  present: moment(), 
  past: moment(dateStringTest).fromNow() 
});

console.log('currentDate', currentDate);
