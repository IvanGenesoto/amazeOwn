module.exports = function renderCartView(items) {

  const state = this
  const {renderElement: r, itemCount, cart} = state
  const $app = document.getElementById('app')
  const title = itemCount ? 'Shopping Cart' : 'Your cart is empty.'

  const add = (total, item, index) => {
    const {price} = item
    const {quantity} = cart[index] || {}
    return total + price * +quantity
  }

  const total = items
    .reduce(add, 0)
    .toFixed(2)

  const callRenderCartItem = (item, index) => {
    const {quantity} = cart[index] || {}
    state.renderCartItem(item, quantity)
  }

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

  items.forEach(callRenderCartItem)
  state.renderCartTotal(total)
}
