// Import nunjucks
var nunjucks = require('nunjucks');
// Import the plugin
var nunjucksDate = require('nunjucks-date');

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
