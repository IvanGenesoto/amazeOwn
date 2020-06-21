module.exports = function updateQuantity(id_, isPlus) {

  const state = this
  const {cart} = state
  const index = cart.findIndex(({id}) => id === id_)
  const item = cart[index]

  if (isPlus) ++item.quantity
  else if (item.quantity > 1) --item.quantity
  else cart.splice(index, 1)

  state.saveCart()
  state.fetchData('item', 'cart', cart)
}
