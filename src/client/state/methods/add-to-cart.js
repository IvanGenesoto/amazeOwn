module.exports = function addToCart(id) {
  const {cart} = this
  let isDuplicate = false
  cart.forEach(function(item) {
    if (item.id === id) {
      ++item.quantity
      isDuplicate = true
    }
  })
  if (!isDuplicate) {
    const item = {id, quantity: 1}
    cart.push(item)
  }
  ++this.itemCount
  const $itemCount = document.querySelector('#item-count')
  $itemCount.textContent = this.itemCount
  this.twirl()
}
