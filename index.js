var moment = require('moment');

var meridiemRegEx = new RegExp('(a{1,2}|p)\.?m{1}?\.?', 'i');
var defaultFormat = 'YYYY';


function getFilter(format) {
    format = format || defaultFormat;
    return function(str, format, meridiem) {
        if (str !== undefined) {
            if (!meridiem) {
                return moment(str).format(format);
            } else {
                return moment(str).format(format).replace(meridiemRegEx, "$1.m.");
            }
        }
    };
}

module.exports = getFilter();

/**
 * Set user-specified default format for date
 */
module.exports.setDefaultFormat = function(format) {
    return defaultFormat = format;
};


/**
 * Add filter to nunjucks environment
 */
module.exports.install = function(env, customName) {
    env.addFilter(customName || 'date', getFilter());
};
