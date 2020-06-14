module.exports = function renderCartItems() {
  const state = this
  const {cart, parse, renderCartItem, renderCartTotal} = state
  const render = cartItem => fetch('/items/' + cartItem.id)
    .then(parse)
    .then(renderCartItem.bind({...state, quantity: cartItem.quantity}))
    .then(renderCartTotal.bind({...state, quantity: cartItem.quantity}))
  state.total = 0
  cart.forEach(render)
}
