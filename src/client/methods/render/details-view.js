module.exports = function renderDetailsView(item) {
  const {constructElement: c, getStars, customizeButton} = this
  const $detailsView = document.getElementById('details')
  const price = item.price.toFixed(2)
  const stars = getStars(item.rating)
  $detailsView.append(
    c('div', {class: 'row'}, [
      c('div', {class: 'col-xs-1'}, [
        c('div', {class: 'row'}, [
          c('div', {class: 'col-xs-12'}, [
            c('img', {class: 'clickable thumbnail image', src: item.image2})
          ])
        ]),
        c('div', {class: 'row'}, [
          c('div', {class: 'col-xs-12'}, [
            c('img', {class: 'clickable thumbnail image', src: item.image3})
          ])
        ]),
        c('div', {class: 'row'}, [
          c('div', {class: 'col-xs-12'}, [
            c('img', {class: 'clickable thumbnail image', src: item.image4})
          ])
        ])
      ]),
      c('div', {class: 'col-xs-4'}, [
        c('img', {class: 'clickable details image', src: item.image})
      ]),
      c('div', {class: 'col-xs-7 details'}, [
        c('h2', null, item.name),
        c('img', {src: stars, class: 'rating'}),
        c('div', {class: 'row'}, [
          c('div', {class: 'col-xs-6 price-column'}, [
            c('h3', {class: 'dollar'}, '$'),
            c('h3', {class: 'price'}, price)
          ]),
          c('div', {class: 'col-xs-6'}, [
            c('button', {class: 'btn btn-default button', id: 'add-cart', 'data-id': item.id}, 'ADD TO CART')
          ])
        ]),
        c('hr'),
        c('p', null, item.description)
      ])
    ])
  )
  customizeButton('#add-cart')
}
