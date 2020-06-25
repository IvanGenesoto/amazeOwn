module.exports = function renderNav() {

  const state = this
  const {renderElement: r} = state
  const itemCount = state.getItemCount()
  const $app = document.getElementById('app')

  $app.append(
    r('div', {id: 'nav'}, [
      r('span', {id: 'logo', class: 'clickable'}, [
        r('h1', {id: 'name'}, [
          'amaze',
          r('span', {id: 'own'}, 'own')
        ]),
        r('img', {src: 'images/bang/1.png', class: 'bang', id: 'frame-1'})
      ]),
      r('form', {id: 'search-form'}, [
        r('input', {id: 'search-input', type: 'search', class: 'form-control', placeholder: 'Search Amazeown'})
      ]),
      r('span', {id: 'cart-container', class: 'clickable'}, [
        r('img', {src: 'images/cart.png', alt: 'cart', id: 'cart-button'}),
        r('p', {id: 'item-count'}, itemCount)
      ])
    ])
  )
}
