module.exports = function StatelessMethods() {
  return {
    constructElement: require('./construct-element'),
    customizeButton: require('./customize-button'),
    getStars: require('./get-stars'),
    parse: require('./parse')
  }
}
