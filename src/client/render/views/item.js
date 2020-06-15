module.exports = function renderItemView(item) {
  const {renderElement: c, getStars} = this
  const $app = document.getElementById('app')
  const price = item.price.toFixed(2)
  const stars = getStars(item.rating)
  $app.append(
    c('div', {id: 'item', class: 'container'}, [
      c('div', {class: 'row'}, [
        c('div', {class: 'col-xs-1'}, [
          c('div', {class: 'row'}, [
            c('div', {class: 'col-xs-12'}, [
              c('img', {class: 'clickable thumbnail image', src: item.image})
            ])
          ]),
          c('div', {class: 'row'}, [
            c('div', {class: 'col-xs-12'}, [
              c('img', {class: 'clickable thumbnail image', src: item.image2})
            ])
          ]),
          c('div', {class: 'row'}, [
            c('div', {class: 'col-xs-12'}, [
              c('img', {class: 'clickable thumbnail image', src: item.image3})
            ])
          ])
        ]),
        c('div', {class: 'col-xs-4'}, [
          c('img', {id: 'display-image', class: 'clickable', src: item.image})
        ]),
        c('div', {class: 'col-xs-7'}, [
          c('h2', null, item.name),
          c('img', {src: stars, class: 'rating'}),
          c('div', {class: 'row'}, [
            c('div', {class: 'col-xs-6 price-column'}, [
              c('h3', {class: 'dollar'}, '$'),
              c('h3', {class: 'price'}, price)
            ]),
            c('div', {class: 'col-xs-6'}, [
              c('button', {class: 'btn btn-default own button', id: 'add-to-cart', 'data-id': item.id}, 'ADD TO CART')
            ])
          ]),
          c('hr'),
          c('p', null, item.description)
        ])
      ])
    ])
  )
}
