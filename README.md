# nunjucks-date

Plugin for nunjucks of momentjs' format date

## Installation

```bash
npm install nunjucks-date --save
```


## Usage

```js
// Import the plugin
var nunjucksDate = require('nunjucks-date');

// Define a custom default date format. Any valid format works.
// The date format defaults to "LLLL"
// http://momentjs.com/docs/#/displaying/format/
nunjucksDate.setDefaultFormat('MMMM Do YYYY, h:mm:ss a');

// Initialize your Nunjucks enironment
var env = new nunjucks.Environment();
// Pass the environment to `install()`
nunjucksDate.install(env);
```

The above is eqivalent to

```js
env.addFilter('date', require('nunjucks-date'));
```

## Tests

```bash
npm test
```

## Contributing

Contributions are welcome. Please file issues with any problems that you experience. Pull requests are welcome.
