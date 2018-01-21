module.exports = function renderCartView() {
  const {c, itemCount, $cartView} = this
  if (itemCount < 1) {
    var title = 'Your cart is empty.'
    var shouldRender = false
  }
  else {
    title = 'Shopping Cart'
    shouldRender = true
  }
  const $row = c('div', {'class': 'row'}, [
    c('div', {'class': 'col-xs-12', 'id': 'shopping-column'}, [
      c('h1', {'id': 'shopping'}, title),
      c('hr', {'id': 'shopping-line'})
    ])
  ])
  $cartView.appendChild($row)
  if (shouldRender) this.renderCartItems()
}
