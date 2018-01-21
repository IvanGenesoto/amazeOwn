module.exports = function StatelessMethods() {

  return {
    c: require('./create-element'),
    customizeButton: require('./customize-button'),
    getStars: require('./get-stars'),
    parse: require('./parse')
  }
}
