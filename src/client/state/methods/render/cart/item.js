module.exports = function renderCartItem(item) {
  const {c, $cartView} = this
  if (item.quantity > 0) {
    const quantity = item.quantity
    const price = item.price.toFixed(2)
    const $row = c('div', {'class': 'row'}, [
      c('div', {'class': 'col-xs-2'}, [
        c('img', {'src': item.image, 'class': 'cart image', 'data-id': item.id})
      ]),
      c('div', {'class': 'col-xs-7'}, [
        c('h3', {'class': 'cart-name', 'data-id': item.id}, item.name)
      ]),
      c('div', {'class': 'col-xs-1 cart price-column', 'data-id': item.id}, [
        c('h3', {'class': 'price'}, [
          c('span', null, '$'),
          price
        ])
      ]),
      c('div', {'class': 'col-xs-1 quantity-column'}, [
        c('h3', {'class': 'quantity'}, [
          quantity,
          c('span', null, 'x')
        ])
      ]),
      c('div', {'class': 'col-xs-1 edit-quantity'}, [
        c('span', null, [
          c('h2', {'class': 'minus', 'data-id': item.id}, '-')
        ]),
        c('span', null, [
          c('h2', {'class': 'plus', 'data-id': item.id}, '+')
        ])
      ]),
      c('hr', {'class': 'cart hr'})
    ])
    $cartView.appendChild($row)
    return item
  }
}
