module.exports = function updateQuantity(id_, isPlus) {

  const state = this
  const {cart} = state
  const index = cart.findIndex(({id}) => id === id_)
  const item = cart[index]

  if (isPlus) {
    ++item.quantity
    ++state.itemCount
  }

  else if (item.quantity > 1) {
    --item.quantity
    --state.itemCount
  }

  else {
    cart.splice(index, 1)
    --state.itemCount
  }

  state.fetchData('item', 'cart', cart)
}
