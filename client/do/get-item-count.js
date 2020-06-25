module.exports = function getItemCount() {

  const {cart} = this

  const increment = (count, item) => {
    const {quantity} = item
    return count + quantity
  }

  return cart.reduce(increment, 0)
}
