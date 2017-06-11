'use strict'

const rework = require('rework')

exports.name = 'rework'
exports.inputFormats = ['rework', 'reworkcss']
exports.outputFormat = 'css'

exports.render = function (str, options) {
  options = typeof options === 'object' ? options : {}
  options.plugins = arrayify(options.plugins)

  const processor = rework(str, options)

  options.plugins.forEach(plugin => {
    processor.use(plugin)
  })

  return processor.toString(options)
}

/**
 * Turn the given value into an array.
 *
 * @param  {*} `val`
 * @return {Array}
 * @api private
 */
function arrayify(val) {
  return Array.isArray(val) ?
    val :
    [val]
}
