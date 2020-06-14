module.exports = function renderNav() {
  const {constructElement: c} = this
  const $app = document.getElementById('app')
  $app.append(
    c('div', {id: 'nav'}, [
      c('span', {id: 'logo'}, [
        c('h1', {id: 'name', class: 'clickable'}, [
          'amaze',
          c('span', null, 'own')
        ]),
        c('img', {src: 'images/logo-frame/1.png', class: 'clickable logo-frame', id: 'frame-1'}),
        c('form', null, [
          c('input', {id: 'search-form', type: 'search', class: 'form-control', placeholder: 'Search Amazeown'})
        ]),
        c('span', {id: 'cart-container', class: 'clickable'}, [
          c('img', {src: 'images/cart.png', alt: 'cart', id: 'cart-button'}),
          c('p', {id: 'item-count'})
        ])
      ]),
      c('button', {class: 'btn btn-default', id: 'back'}, 'BACK')
    ])
  )
}
