module.exports = function updateQuantity(id, plusOrMinus) {
  const {cart, $cartView, renderCartView} = this
  cart.forEach(function(item) {
    if (item.id !== id) return
    const $itemCount = document.querySelector('#item-count')
    if (plusOrMinus === 'plus') {
      item.quantity += 1
      this.itemCount += 1
      $itemCount.textContent = this.itemCount
    }
    else if (item.quantity > 1) {
      item.quantity -= 1
      this.itemCount -= 1
      $itemCount.textContent = this.itemCount
    }
    else {
      const index = cart.indexOf(item)
      cart.splice(index)
    }
    $cartView.innerHTML = ''
    renderCartView()
  })
}
