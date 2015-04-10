/**
 * jstransformer-rework <https://github.com/tunnckoCore/jstransformer-rework>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var fs = require('fs');
var test = require('assertit');
var transform = require('../index');

test('should transform modern CSS with ReworkCSS (.render)', function(done) {
  var plugins = [
    require('rework-plugin-function')({
      subtract: function(a, b) { return a - b },
      multiply: function(a, b) { return a * b },
      divide: function(a, b) { return a / b },
      floor: Math.floor
    }),
    require('rework-vars')()
  ];
  var fixture = fs.readFileSync('./test/fixture.css', 'utf8');
  var expected = fs.readFileSync('./test/expected.css', 'utf8');
  var actual = transform.render(fixture, {}, plugins);

  test.equal(actual, expected);
  done();
});
