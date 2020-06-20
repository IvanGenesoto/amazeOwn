module.exports = function renderCartTotal(quantity, item) {
  const state = this
  const {renderElement: r} = state
  state.total = +state.total + item.price * quantity
  state.total = state.total.toFixed(2)
  const $shopping = document.getElementById('shopping')
  const attributeByName = {
    class: 'btn btn-default own button cart',
    id: 'checkout-button',
    'data-total': state.total
  }
  $shopping.append(r('button', attributeByName, 'CHECKOUT'))
  $shopping.append(
    r('span', {id: 'cart-total'}, [
      'Total:',
      r('span', null, [
        '$',
        r('span', null, state.total)
      ])
    ])
  )
}
