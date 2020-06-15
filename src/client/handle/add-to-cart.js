module.exports = function addToCart(id) {
  const state = this
  const {cart} = state
  let isDuplicate = false
  cart.forEach(item => {
    if (item.id !== id) return
    ++item.quantity
    isDuplicate = true
  })
  if (!isDuplicate) cart.push({id, quantity: 1})
  ++state.itemCount
  const $itemCount = document.getElementById('item-count')
  $itemCount.textContent = state.itemCount
  state.twirl()
}
