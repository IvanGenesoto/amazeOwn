module.exports = function renderNav() {
  const {renderElement: c, itemCount} = this
  const $app = document.getElementById('app')
  $app.append(
    c('div', {id: 'nav'}, [
      c('span', {id: 'logo', class: 'clickable'}, [
        c('h1', {id: 'name'}, [
          'amaze',
          c('span', {id: 'own'}, 'own')
        ]),
        c('img', {src: 'images/bang/1.png', class: 'bang', id: 'frame-1'})
      ]),
      c('form', {id: 'search-form'}, [
        c('input', {id: 'search-input', type: 'search', class: 'form-control', placeholder: 'Search Amazeown'})
      ]),
      c('span', {id: 'cart-container', class: 'clickable'}, [
        c('img', {src: 'images/cart.png', alt: 'cart', id: 'cart-button'}),
        c('p', {id: 'item-count'}, itemCount)
      ])
    ])
  )
}
