'use strict';

var rework = require('rework');

exports.name = 'rework';
exports.inputFormats = ['rework', 'reworkcss'];
exports.outputFormat = 'css';

exports.render = function _render(str, options) {
  options = typeof options === 'object' ? options : {};
  options.plugins = arrayify(options.plugins);

  var process = rework(str, options);

  options.plugins.forEach(function(plugin) {
    process = process.use(plugin);
  });

  return process.toString(options);
};

/**
 * arrayify value
 *
 * @param  {*} `val`
 * @return {Array}
 * @api private
 */
function arrayify(val) {
  return !Array.isArray(val)
    ? [val]
    : val;
}
