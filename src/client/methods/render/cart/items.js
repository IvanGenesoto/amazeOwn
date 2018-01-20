module.exports = function renderCartItems() {
  const {cart, parse, renderCartItem, renderCartTotal} = this
  this.total = 0
  cart.forEach(function(item) {
    function quantify(cartItem) {
      cartItem.quantity = item.quantity
      return cartItem
    }
    fetch('/items/' + item.id)
      .then(parse)
      .then(quantify)
      .then(renderCartItem)
      .then(renderCartTotal)
  })
}
