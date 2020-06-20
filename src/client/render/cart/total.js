module.exports = function renderCartTotal(total) {

  const state = this
  const {renderElement: r} = state
  const $shopping = document.getElementById('shopping')

  const attributeByName = {
    class: 'btn btn-default own button cart',
    id: 'checkout-button',
    'data-total': total
  }

  $shopping.append(r('button', attributeByName, 'CHECKOUT'))

  $shopping.append(
    r('span', {id: 'cart-total'}, [
      'Total:',
      r('span', null, [
        '$',
        r('span', null, total)
      ])
    ])
  )
}
