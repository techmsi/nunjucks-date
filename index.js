var moment = require('moment');

var meridiemRegEx = new RegExp('(a{1,2}|p)\.?m{1}?\.?', 'i');
var defaultFormat = 'YYYY';
var customName = null;

function getFilter(dateString) {
    if (arguments.length === 1) {
        // getFilter('Dec 25, 1995')
        return moment(dateString).format(defaultFormat);
    } else if (arguments.length === 2 && typeof arguments[1] === 'boolean') {
        // getFilter('Dec 25, 1995', true)
        return moment(dateString).format(defaultFormat).replace(meridiemRegEx, "$1.m.");
    } else if (arguments.length === 2) {
        // getFilter('Dec 25, 1995', 'YYYYMMDD')
        var format = arguments[1];

        return moment(dateString).format(format);
    } else {
        // getFilter('Dec 25, 1995', 'MM-DD-YYYY', true)
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
 * Set user-specified default format for date
 */
module.exports.setCustomName = function(name) {
    return customName = name;
};


/**
 * Add filter to nunjucks environment
 */
module.exports.install = function(env, customName) {
    env.addFilter(customName || 'date', getFilter);
};
