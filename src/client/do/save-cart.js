module.exports = function saveCart() {

  const {storage, cart} = this

  storage.setItem('cart', cart)
}
