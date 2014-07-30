var moment = require('moment');

// capture the a or the p in the meridiem
var meridiemRegEx = new RegExp('(a{1,2}|p)\.?m{1}?\.?', 'i');
var defaultFormat = 'YYYY';

function getFilter(dateString) {
    if (arguments.length === 1) {
        // getFilter('March 1st')
        return moment(dateString).format(defaultFormat);
    } else if (arguments.length === 2 && typeof arguments[1] === 'boolean') {
        // getFilter('March 1st', true)
        return moment(dateString).format(defaultFormat).replace(meridiemRegEx, "$1.m.");
    } else if (arguments.length === 2) {
        // getFilter('March 1st', 'YYYYMMDD')
        var format = arguments[1];

        return moment(dateString).format(format);
    } else {
        // getFilter('March 1st', 'MM-DD-YYYY', true)
        var format = arguments[1];

        return moment(dateString).format(format).replace(meridiemRegEx, "$1.m.");
    }
}

module.exports = getFilter;

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
    env.addFilter(customName || 'date', getFilter);
};
