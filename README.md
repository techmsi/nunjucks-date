nunjucks-date
=============

Plugin for nunjucks of momentjs' format date
## Installation

  npm install nunjucks-date --save

## Usage
```
	var nunjucksDate = require('nunjucks-date');
	nunjucksDate.setDefaultFormat('MMMM Do YYYY, h:mm:ss a');
```

````
	var env = new nunjucks.Environment();
	nunjucksDate.install(env);
```

The above is eqivalent to
```
	addFilter('date', require('nunjucks-date'));
```
## Tests
  npm test

## Contributing
	Contributions are welcome.
