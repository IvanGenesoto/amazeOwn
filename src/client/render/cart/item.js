module.exports = function renderCartItem(quantity, item) {
  const {renderElement: c} = this
  const $cartView = document.getElementById('cart')
  if (!quantity) return
  const price = item.price.toFixed(2)
  $cartView.append(
    c('div', {class: 'row'}, [
      c('div', {class: 'col-xs-2'}, [
        c('img', {src: item.image, class: 'clickable cart image', 'data-id': item.id})
      ]),
      c('div', {class: 'col-xs-7'}, [
        c('h3', {class: 'cart-name', 'data-id': item.id}, item.name)
      ]),
      c('div', {class: 'col-xs-1 cart price-column'}, [
        c('h3', {class: 'price'}, [
          c('span', null, '$'),
          price
        ])
      ]),
      c('div', {class: 'col-xs-1 quantity-column'}, [
        c('h3', {class: 'quantity'}, [
          quantity,
          c('span', null, 'x')
        ])
      ]),
      c('div', {class: 'col-xs-1 edit-quantity'}, [
        c('span', null, [
          c('h2', {class: 'clickable minus', 'data-id': item.id}, '-')
        ]),
        c('span', null, [
          c('h2', {class: 'clickable plus', 'data-id': item.id}, '+')
        ])
      ]),
      c('hr', {class: 'cart hr'})
    ])
  )
  return item
}
