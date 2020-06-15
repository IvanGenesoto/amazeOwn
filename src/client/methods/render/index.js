module.exports = function RenderMethods(reducers) {

  const renderViewByName = {
    list: require('./list-view'),
    item: require('./item-view'),
    checkout: require('./checkout-view'),
    confirmOrder: require('./confirm-order-view'),
    confirmation: require('./confirmation-view')
  }

  const renderMethods = {
    renderView: require('./view'),
    renderNav: require('./nav'),
    renderPromo: require('./promo'),
    renderImage: require('./image'),
    renderViewByName
  }

  const cartMethods = require('./cart')()
  const {renderCartView} = cartMethods
  const {append} = reducers

  renderViewByName.cart = renderCartView

  return Object.entries(cartMethods).reduce(append, renderMethods)
}
