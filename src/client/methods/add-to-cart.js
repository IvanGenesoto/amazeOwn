module.exports = function addToCart(id) {
  const {cart} = this
  let isDuplicate = false
  cart.forEach(item => {
    if (item.id !== id) return
    ++item.quantity
    isDuplicate = true
  })
  if (!isDuplicate) cart.push({id, quantity: 1})
  ++this.itemCount
  const $itemCount = document.getElementById('item-count')
  $itemCount.textContent = this.itemCount
  this.twirl()
}
