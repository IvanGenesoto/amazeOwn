module.exports = function renderCartView() {
  const {c, itemCount, $cartView} = this
  const title = itemCount ? 'Shopping Cart' : 'Your cart is empty.'
  const $row = c('div', {class: 'row'}, [
    c('div', {class: 'col-xs-12', id: 'shopping-column'}, [
      c('h1', {id: 'shopping'}, title),
      c('hr', {id: 'shopping-line'})
    ])
  ])
  $cartView.appendChild($row)
  itemCount && this.renderCartItems()
}
