module.exports = function renderCartTotal(totalString) {

  const state = this
  const {renderElement: r, cart} = state
  const [hasItem] = cart
  const $shopping = document.getElementById('shopping')

  const attributeByName = {
    class: 'btn btn-default own button cart',
    id: 'checkout-button'
  }

  hasItem || (attributeByName.disabled = true)
  $shopping.append(r('button', attributeByName, 'CHECKOUT'))

  $shopping.append(
    r('span', {id: 'cart-total'}, [
      'Total:',
      r('span', null, [
        '$',
        r('span', null, totalString)
      ])
    ])
  )
}
