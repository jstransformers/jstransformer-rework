/**
 * jstransformer-rework <https://github.com/tunnckoCore/jstransformer-rework>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var rework = require('rework');

exports.name = 'rework';
exports.outputFormat = 'css';

exports.render = function _render(str, opts, plugins) {
  plugins = plugins || [];
  plugins = Array.isArray(plugins) ? plugins : [plugins];

  var process = rework(str, opts);

  plugins.forEach(function(plugin) {
    process = process.use(plugin);
  });

  return process.toString(opts);
};
