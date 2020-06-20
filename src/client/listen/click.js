module.exports = function listenForClick() {

  const state = this
  const $app = document.getElementById('app')
  const {generateNumber} = state

  const getIsFeatured = (id, classList) =>
    id === 'name' ||
    id === 'own' ||
    id === 'continue-shopping' ||
    classList.contains('bang')

  $app.addEventListener('click', function (event) {
    const {target: $target} = event
    const {classList} = $target
    const id = $target.getAttribute('id')
    const dataId = $target.dataset.id
    const src = $target.getAttribute('src')
    const isPlus = classList.contains('plus')
    const isMinus = classList.contains('minus')
    const isThumbnail = classList.contains('thumbnail')
    if (id === 'catch-me') return state.renderPromo()
    if (id === 'cart-button' || id === 'item-count') return state.renderView('cart')
    if (getIsFeatured(id, classList)) state.fetchData('featured', 'list')
    if (id === 'add-to-cart') return state.addToCart(dataId)
    if (isPlus || isMinus) return state.updateQuantity(dataId, isPlus)
    if (dataId) return state.fetchData('item', 'item', dataId)
    if (isThumbnail) {
      const $displayedImage = document.getElementById('display-image')
      return $displayedImage.setAttribute('src', src)
    }
    if (id === 'display-image') return state.renderImage(src)
    if (id === 'full-sized-image') {
      const $itemView = document.getElementById('item')
      const $imageView = document.getElementById('image')
      $imageView.remove()
      return $itemView.classList.remove('hidden')
    }
    if (id === 'checkout-button') return state.renderView('checkout')
    if (id !== 'confirm-button') return
    const number = generateNumber()
    state.cart = []
    state.itemCount = 0
    return state.renderView('confirmation', number)
  })
}
