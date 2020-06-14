module.exports = function RenderMethods(reducers) {

  const renderMethods = {
    renderNav: require('./nav'),
    renderContainers: require('./containers'),
    renderListView: require('./list-view'),
    renderSearchView: require('./search-view'),
    renderPromo: require('./promo'),
    renderDetailsView: require('./details-view'),
    renderImageView: require('./image-view'),
    renderCheckout: require('./checkout'),
    renderConfirmOrder: require('./confirm-order'),
    renderConfirmation: require('./confirmation')
  }

  const cartMethods = require('./cart')()
  const {append} = reducers

  return Object.entries(cartMethods).reduce(append, renderMethods)
}
