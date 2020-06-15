module.exports = function listen() {

  const state = this
  const $app = document.getElementById('app')
  const {generateConfirmationNumber} = state

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
    if (id === 'name' || id === 'own' || classList.contains('bang')) state.goToFeatured()
    if (id === 'add-to-cart') return state.addToCart(dataId)
    if (isPlus || isMinus) return state.updateQuantity(dataId, isPlus)
    if (dataId) return state.goToItem(dataId)
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
    if (id === 'checkout-button') {
      state.orderTotal = $target.getAttribute('data-total')
      return state.renderView('checkout')
    }
    if (id === 'continue-shopping') return state.goToFeatured()
    if (id !== 'confirm-button') return
    const number = generateConfirmationNumber()
    state.cart = []
    state.itemCount = 0
    return state.renderView('confirmation', number)
  })

  $app.addEventListener('submit', function (event) {
    const {target: $target} = event
    const id = $target.getAttribute('id')
    const $searchInput = document.getElementById('search-input')
    const {value} = $searchInput
    event.preventDefault()
    if (id === 'search-form') return state.goToSearchResults(value)
    const idByName = {
      email: 'form-email',
      name: 'form-name',
      billing: 'form-billing-address',
      shipping: 'form-shipping-address',
      phone: 'form-phone-number',
      credit: 'form-credit-card',
      expiration: 'form-expiration-date',
      ccv: 'form-ccv',
      promo: 'form-promo-code'
    }
    const appendValue = function (valueByName, [name, id]) {
      const $input = document.getElementById(id)
      const {value} = $input
      valueByName[name] = value
      return valueByName
    }
    const valueByName = Object.entries(idByName).reduce(appendValue, {})
    state.renderView('confirmOrder', valueByName)
  })
}
