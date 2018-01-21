module.exports = function renderCartItems() {
  const state = this
  const {cart, parse, renderCartItem, renderCartTotal} = state
  state.total = 0
  cart.forEach(function(item) {
    function quantify(cartItem) {
      cartItem.quantity = item.quantity
      return cartItem
    }
    fetch('/items/' + item.id)
      .then(parse)
      .then(quantify)
      .then(renderCartItem.bind(state))
      .then(renderCartTotal.bind(state))
  })
}
