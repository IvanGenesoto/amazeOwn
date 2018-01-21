module.exports = function updateQuantity(id, plusOrMinus) {
  const state = this
  const {cart, $cartView} = state
  cart.forEach(function(item) {
    if (item.id !== id) return
    const $itemCount = document.querySelector('#item-count')
    if (plusOrMinus === 'plus') {
      item.quantity += 1
      state.itemCount += 1
      $itemCount.textContent = state.itemCount
    }
    else if (item.quantity > 1) {
      item.quantity -= 1
      state.itemCount -= 1
      $itemCount.textContent = state.itemCount
    }
    else {
      const index = cart.indexOf(item)
      cart.splice(index)
    }
    $cartView.innerHTML = ''
    state.renderCartView()
  })
}
