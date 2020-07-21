module.exports = function renderView(name, argument) {

  const state = this
  const $app = document.getElementById('app')

  const renderViewByName = {
    cart: state.renderCartView,
    checkout: state.renderCheckoutView,
    confirm: state.renderConfirmView,
    confirmation: state.renderConfirmationView,
    featured: state.renderListView,
    item: state.renderItemView,
    search: state.renderListView
  }

  const render = renderViewByName[name]

  $app.innerHTML = ''
  state.renderNav()
  render.call(state, argument)
}
