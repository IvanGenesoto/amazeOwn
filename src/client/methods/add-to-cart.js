module.exports = function addToCart(id) {
  const state = this
  const {cart} = state
  const item = cart.find(({id: id_}) => id_ === id)
  item && ++item.quantity
  item || cart.push({id, quantity: 1})
  ++state.itemCount
  const $itemCount = document.getElementById('item-count')
  $itemCount.textContent = state.itemCount
  state.twirl()
}
