module.exports = function renderView(name, ...rest) {
  const state = this
  const renderViewByName = {
    cart: state.renderCartView,
    checkout: state.renderCheckoutView,
    confirmOrder: state.renderConfirmOrderView,
    confirmation: state.renderConfirmationView,
    item: state.renderItemView,
    list: state.renderListView
  }
  const render = renderViewByName[name]
  const $app = document.getElementById('app')
  state.currentView = name
  $app.innerHTML = ''
  state.renderNav()
  render.call(state, ...rest)
}
