module.exports = function renderCartView() {
  const state = this
  const {constructElement: c, itemCount} = state
  const $app = document.getElementById('app')
  const title = itemCount ? 'Shopping Cart' : 'Your cart is empty.'
  $app.append(
    c('div', {id: 'cart', class: 'container'}, [
      c('div', {class: 'row'}, [
        c('div', {class: 'col-xs-12', id: 'shopping-column'}, [
          c('h1', {id: 'shopping'}, title),
          c('hr', {id: 'shopping-line'})
        ])
      ])
    ])
  )
  itemCount && state.renderCartItems()
}
