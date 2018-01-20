module.exports = function RenderCartMethods() {

  return {
    renderCartItem: require('./item'),
    renderCartItems: require('./items'),
    renderCartTotal: require('./total'),
    renderCartView: require('./view')
  }
}
