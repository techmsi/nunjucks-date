# nunjucks-date

Plugin for nunjucks of momentjs' format date
[![Build Status](https://travis-ci.org/techmsi/nunjucks-date.svg?branch=master)](https://travis-ci.org/techmsi/nunjucks-date)

[![Code Climate](https://codeclimate.com/github/techmsi/nunjucks-date/badges/gpa.svg)](https://codeclimate.com/github/techmsi/nunjucks-date)

## Installation

```bash
npm install nunjucks-date --save
```


## Usage

```js
// Import the plugin
var nunjucksDate = require('nunjucks-date');

// Define a custom default date format. Any valid format works.
// The date format defaults to "YYYY"
// http://momentjs.com/docs/#/displaying/format/
nunjucksDate.setDefaultFormat('MMMM Do YYYY, h:mm:ss a');

// Initialize your Nunjucks enironment
var env = new nunjucks.Environment();
```

### Using default name : 'date'
```js
// Pass the environment to `install()`
nunjucksDate.install(env);
```

### Using custom name
```js
// Pass the environment & a custom filter name
nunjucksDate.install(env, 'yourFilterName');
```

The above is eqivalent to

```js
env.addFilter('date', require('nunjucks-date'));
```

## Tests

```bash
npm test
```

```bash
npm test --coverage
```

```bash
open coverage/lcov-report/index.html
```

## Contributing

Contributions are welcome. Please file issues with any problems that you experience. Pull requests are welcome.
