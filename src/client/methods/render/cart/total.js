module.exports = function renderCartTotal(item) {
  const {constructElement: c, customizeButton, quantity} = this
  this.total = +this.total + item.price * quantity
  this.total = this.total.toFixed(2)
  const $shopping = document.getElementById('shopping')
  const $checkoutButton = document.getElementById('checkout-button')
  const attributeByName = {
    class: 'btn btn-default button cart',
    id: 'checkout-button',
    'data-total': this.total
  }
  $checkoutButton && $checkoutButton.remove()
  $shopping.append(c('button', attributeByName, 'CHECKOUT'))
  customizeButton('#checkout-button')
  const $cartTotal = document.getElementById('cart-total')
  $cartTotal && $cartTotal.remove()
  $shopping.append(
    c('span', {id: 'cart-total'}, [
      'Total:',
      c('span', null, [
        '$',
        c('span', null, this.total)
      ])
    ])
  )
}
