module.exports = function renderCartTotal(item) {
  const {c, customizeButton} = this
  this.total = +this.total + item.price * item.quantity
  this.total = this.total.toFixed(2)
  const $shopping = document.querySelector('#shopping')
  let $checkoutButton = document.querySelector('#checkout-button')
  if ($checkoutButton) $checkoutButton.remove()
  $checkoutButton = c('button', {
    'class': 'btn btn-default button cart',
    'id': 'checkout-button',
    'data-total': this.total
  }, 'CHECKOUT')
  $shopping.appendChild($checkoutButton)
  customizeButton('#checkout-button')
  let $cartTotal = document.querySelector('#cart-total')
  if ($cartTotal) $cartTotal.remove()
  $cartTotal = c('span', {'id': 'cart-total'}, [
    'Total:',
    c('span', null, [
      '$',
      c('span', null, this.total)
    ])
  ])
  $shopping.appendChild($cartTotal)
}
