module.exports = function addToCart(id) {

  const state = this
  const {cart} = state
  const item = cart.find(({id: id_}) => id_ === id)
  const $itemCount = document.getElementById('item-count')

  item && ++item.quantity
  item || cart.push({id, quantity: 1})
  ++state.itemCount
  $itemCount.textContent = state.itemCount
  state.twirl()
}
