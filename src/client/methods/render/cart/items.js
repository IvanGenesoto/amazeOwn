module.exports = function renderCartItems() {
  const state = this
  const {cart, parse, renderCartItem, renderCartTotal} = state
  const render = item => fetch('/item/' + item.id)
    .then(parse)
    .then(renderCartItem.bind(state, item.quantity))
    .then(renderCartTotal.bind(state, item.quantity))
  state.total = 0
  cart.forEach(render)
}
