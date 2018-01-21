module.exports = function RenderMethods(reducers) {

  const renderMethods = {
    renderConfirmOrder: require('./confirm-order'),
    renderDetailsView: require('./details-view'),
    renderImageView: require('./image-view'),
    renderListView: require('./list-view'),
    renderPromo: require('./promo'),
    renderSearchView: require('./search-view')
  }

  const cartMethods = require('./cart')()
  const {append} = reducers

  return Object.entries(cartMethods).reduce(append, renderMethods)
}
