module.exports = function renderItemView(item) {
  const {renderElement: r, getStars} = this
  const $app = document.getElementById('app')
  const price = item.price.toFixed(2)
  const stars = getStars(item.rating)
  $app.append(
    r('div', {id: 'item', class: 'container'}, [
      r('div', {class: 'row'}, [
        r('div', {class: 'col-xs-1'}, [
          r('div', {class: 'row'}, [
            r('div', {class: 'col-xs-12'}, [
              r('img', {class: 'clickable thumbnail image', src: item.image})
            ])
          ]),
          r('div', {class: 'row'}, [
            r('div', {class: 'col-xs-12'}, [
              r('img', {class: 'clickable thumbnail image', src: item.image2})
            ])
          ]),
          r('div', {class: 'row'}, [
            r('div', {class: 'col-xs-12'}, [
              r('img', {class: 'clickable thumbnail image', src: item.image3})
            ])
          ])
        ]),
        r('div', {class: 'col-xs-4'}, [
          r('img', {id: 'display-image', class: 'clickable', src: item.image})
        ]),
        r('div', {class: 'col-xs-7'}, [
          r('h2', null, item.name),
          r('img', {src: stars, class: 'rating'}),
          r('div', {class: 'row'}, [
            r('div', {class: 'col-xs-6 price-column'}, [
              r('h3', {class: 'dollar'}, '$'),
              r('h3', {class: 'price'}, price)
            ]),
            r('div', {class: 'col-xs-6'}, [
              r('button', {class: 'btn btn-default own button', id: 'add-to-cart', 'data-id': item.id}, 'ADD TO CART')
            ])
          ]),
          r('hr'),
          r('p', null, item.description)
        ])
      ])
    ])
  )
}
