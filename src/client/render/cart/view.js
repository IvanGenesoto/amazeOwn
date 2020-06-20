module.exports = function renderCartView() {
  const state = this
  const {renderElement: r, itemCount} = state
  const $app = document.getElementById('app')
  const title = itemCount ? 'Shopping Cart' : 'Your cart is empty.'
  $app.append(
    r('div', {id: 'cart', class: 'container'}, [
      r('div', {class: 'row'}, [
        r('div', {class: 'col-xs-12', id: 'shopping-column'}, [
          r('h1', {id: 'shopping'}, title),
          r('hr', {id: 'shopping-line'})
        ])
      ])
    ])
  )
  itemCount && state.renderCartItems()
}
