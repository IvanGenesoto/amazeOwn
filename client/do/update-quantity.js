module.exports = function updateQuantity(id, isPlus) {

  const state = this
  const {cart} = state
  const index = cart.findIndex(({id: id_}) => id_ === id)
  const item = cart[index]

  if (isPlus) ++item.quantity
  else if (item.quantity > 1) --item.quantity
  else cart.splice(index, 1)

  state.saveCart()
  state.shouldAlterHistory = false
  state.fetchData('cart')
}
