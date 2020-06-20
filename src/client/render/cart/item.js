module.exports = function renderCartItem(item, quantity) {

  const {renderElement: r} = this
  const price = item.price.toFixed(2)
  const $cartView = document.getElementById('cart')

  if (!quantity) return

  $cartView.append(
    r('div', {class: 'row'}, [
      r('div', {class: 'col-xs-2'}, [
        r('img', {src: item.image, class: 'clickable cart image', 'data-id': item.id})
      ]),
      r('div', {class: 'col-xs-7'}, [
        r('h3', {class: 'cart-name', 'data-id': item.id}, item.name)
      ]),
      r('div', {class: 'col-xs-1 cart price-column'}, [
        r('h3', {class: 'price'}, [
          r('span', null, '$'),
          price
        ])
      ]),
      r('div', {class: 'col-xs-1 quantity-column'}, [
        r('h3', {class: 'quantity'}, [
          quantity,
          r('span', null, 'x')
        ])
      ]),
      r('div', {class: 'col-xs-1 edit-quantity'}, [
        r('span', null, [
          r('h2', {class: 'clickable minus', 'data-id': item.id}, '-')
        ]),
        r('span', null, [
          r('h2', {class: 'clickable plus', 'data-id': item.id}, '+')
        ])
      ]),
      r('hr', {class: 'cart hr'})
    ])
  )

  return item
}
