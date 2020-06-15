module.exports = function renderCartTotal(quantity, item) {
  const state = this
  const {constructElement: c, customizeButton} = state
  state.total = +state.total + item.price * quantity
  state.total = state.total.toFixed(2)
  const $shopping = document.getElementById('shopping')
  const $checkoutButton = document.getElementById('checkout-button')
  const attributeByName = {
    class: 'btn btn-default button cart',
    id: 'checkout-button',
    'data-total': state.total
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
        c('span', null, state.total)
      ])
    ])
  )
}
