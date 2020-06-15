module.exports = function Methods(reducers) {

  const methods = {
    addToCart: require('./add-to-cart'),
    generateConfirmationNumber: require('./generate-confirmation-number'),
    fetchData: require('./fetch-data'),
    listen: require('./listen'),
    preloadFrame: require('./preload-frame'),
    removePromo: require('./remove-promo'),
    twirl: require('./twirl'),
    updateQuantity: require('./update-quantity')
  }

  const otherMethods = [require('./render')(reducers), require('./stateless')()]
  const {append, appendAll} = reducers

  return otherMethods.reduce(appendAll.bind({append}), methods)
}
