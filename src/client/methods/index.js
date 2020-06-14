module.exports = function Methods(reducers) {

  const methods = {
    activateView: require('./activate-view'),
    addToCart: require('./add-to-cart'),
    generateConfirmationNumber: require('./generate-confirmation-number'),
    goToDetails: require('./go-to-details'),
    goToSearchResults: require('./go-to-search-results'),
    listen: require('./listen'),
    preloadLogoFrames: require('./preload-logo-frames'),
    removePromo: require('./remove-promo'),
    twirl: require('./twirl'),
    updateQuantity: require('./update-quantity')
  }

  const otherMethods = [require('./render')(reducers), require('./stateless')()]
  const {append, appendAll} = reducers

  return otherMethods.reduce(appendAll.bind({append}), methods)
}
