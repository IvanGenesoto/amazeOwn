module.exports = function RenderMethods() {

  const renderMethods = {
    renderConfirmOrder: require('./confirm-order'),
    renderDetailsView: require('./details-view'),
    renderImageView: require('./image-view'),
    renderListView: require('./list-view'),
    renderPromo: require('./promo'),
    renderSearchView: require('./search-view')
  }

  const cartMethods = require('./cart')()
  return Object.entries(cartMethods).reduce(
    (renderMethods, [methodName, method]) => (renderMethods[methodName] = method),
    renderMethods
  )
}
