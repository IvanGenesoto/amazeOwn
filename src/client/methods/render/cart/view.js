module.exports = function renderCartView() {
  const {constructElement: c, itemCount} = this
  const $cartView = document.getElementById('cart')
  const title = itemCount ? 'Shopping Cart' : 'Your cart is empty.'
  $cartView.append(
    c('div', {class: 'row'}, [
      c('div', {class: 'col-xs-12', id: 'shopping-column'}, [
        c('h1', {id: 'shopping'}, title),
        c('hr', {id: 'shopping-line'})
      ])
    ])
  )
  itemCount && this.renderCartItems()
}
