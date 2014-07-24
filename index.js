var moment = require('moment');
var defaultFormat = 'YYYY';

module.exports = {
  /**
  * Return Formatted date via moment.js
  */
  date: function(str, format, meridiem) {
    var meridiemRegEx = new RegExp('(a{1,2}|p)\.?m{1}?\.?', 'i');

    if (str !== undefined) {
      if (!meridiem) {
        return moment(str).format(format);
      }
      else {
        return moment(str).format(format).replace(meridiemRegEx, "$1.m.");
      }
    }
  },

  /**
  * Set user-specified default format for date
  */
  setDefaultFormat: function(format) {
    defaultFormat = format;
    return defaultFormat;
  },
  
  /**
  * Add filter to nunjucks environment
  */
  install: function(env, customName) {
    env.addFilter(customName || 'date', function(str, format, meridiem) {
      return date(str, format, meridiem);
    });
  }
};