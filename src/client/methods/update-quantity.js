module.exports = function updateQuantity(id, isPlus) {
  const state = this
  const {cart} = state
  const $cartView = document.getElementById('cart')
  cart.forEach(item => {
    if (item.id !== id) return
    const $itemCount = document.getElementById('item-count')
    if (isPlus) {
      ++item.quantity
      ++state.itemCount
      $itemCount.textContent = state.itemCount
    }
    else if (item.quantity > 1) {
      --item.quantity
      --state.itemCount
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
