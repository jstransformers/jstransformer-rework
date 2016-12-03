module.exports = {
  plugins: [
    require('rework-plugin-function')({
      subtract: function(a, b) { return a - b },
      multiply: function(a, b) { return a * b },
      divide: function(a, b) { return a / b },
      floor: Math.floor
    }),
    require('rework-vars')()
  ]
}
