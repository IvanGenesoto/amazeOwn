module.exports = function Methods() {

  const methods = {
    c: require('./create-element'),
    activateView: require('./activate-view'),
    addToCart: require('./add-to-cart'),
    createBackButton: require('./create-back-button'),
    customizeButton: require('./customize-button'),
    generateConfirmationNumber: require('./generate-confirmation-number'),
    getStars: require('./get-stars'),
    goToDetails: require('./go-to-details'),
    goToSearchResults: require('./go-to-search-results'),
    listen: require('./listen'),
    parse: require('./parse'),
    preloadLogoFrames: require('./preload-logo-frames'),
    removePromo: require('./remove-promo'),
    twirl: require('./twirl'),
    updateQuantity: require('./update-quantity')
  }

  const renderMethods = require('./render')()
  return Object.entries(renderMethods).reduce(
    (methods, [methodName, method]) => (methods[methodName] = method),
    methods
  )
}
