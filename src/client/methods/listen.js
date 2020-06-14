module.exports = function listen() {

  const state = this
  const {browsingHistory, isTwirling} = state
  const $nav = document.getElementById('nav')
  const $featuredView = document.getElementById('featured')
  const $searchView = document.getElementById('search')
  const $detailsView = document.getElementById('details')
  const $imageView = document.getElementById('image')
  const $cartView = document.getElementById('cart')
  const $checkoutView = document.getElementById('checkout')
  const $confirmOrderView = document.getElementById('confirm-order')
  const $confirmationView = document.getElementById('confirmation')

  $nav.addEventListener('click', function ({target}) {
    const id = target.parentElement.getAttribute('id')
    if (id === 'catch-me') return state.renderPromo()
    if (id === 'cart-container') {
      browsingHistory.push(state.currentView)
      $cartView.innerHTML = ''
      state.renderCartView()
      state.activateView($cartView)
      return
    }
    if (id !== 'logo' && id !== 'name') return
    if (isTwirling) return
    browsingHistory.push(state.currentView)
    state.activateView($featuredView)
  })

  $nav.addEventListener('submit', function (event) {
    event.preventDefault()
    browsingHistory.push(state.currentView)
    $searchView.innerHTML = ''
    const $searchForm = document.getElementById('search-form')
    state.goToSearchResults($searchForm.value)
  })

  $featuredView.addEventListener('click', function ({target}) {
    browsingHistory.push(state.currentView)
    $detailsView.innerHTML = ''
    const id = target.dataset.id
    if (id) state.goToDetails(id)
  })

  $searchView.addEventListener('click', function ({target}) {
    browsingHistory.push(state.currentView)
    $detailsView.innerHTML = ''
    const id = target.dataset.id
    if (id) state.goToDetails(id)
  })

  $detailsView.addEventListener('click', function ({target}) {
    if (target.getAttribute('id') === 'add-cart') {
      const id = target.dataset.id
      return state.addToCart(id)
    }
    const {classList} = event.target
    if (!classList.contains('image')) return
    if (classList.contains('details')) {
      $imageView.innerHTML = ''
      const image = event.target.getAttribute('src')
      state.renderImageView(image)
      state.activateView($imageView)
      return
    }
    if (!classList.contains('thumbnail')) return
    const newImage = event.target.getAttribute('src')
    const $detailsImage = document.querySelector('.details')
    const currentImage = $detailsImage.getAttribute('src')
    $detailsImage.setAttribute('src', newImage)
    event.target.setAttribute('src', currentImage)
  })

  $imageView.addEventListener('click', function () {
    state.activateView($detailsView)
  })

  $cartView.addEventListener('click', function ({target}) {
    if (target.getAttribute('id') === 'checkout-button') {
      browsingHistory.push(state.currentView)
      state.orderTotal = target.getAttribute('data-total')
      return state.activateView($checkoutView)
    }
    const {classList} = target
    if (classList.contains('cart-name') || classList.contains('image')) {
      browsingHistory.push(state.currentView)
      $detailsView.innerHTML = ''
      const id = target.dataset.id
      state.goToDetails(id)
      return
    }
    const isPlus = classList.contains('plus')
    if (!isPlus && !classList.contains('minus')) return
    const id = target.dataset.id
    state.updateQuantity(id, isPlus)
  })

  $checkoutView.addEventListener('submit', function (event) {
    event.preventDefault()
    browsingHistory.push(state.currentView)
    $confirmOrderView.innerHTML = ''
    state.renderConfirmOrder()
    state.activateView($confirmOrderView)
  })

  $confirmOrderView.addEventListener('click', function ({target}) {
    if (target.getAttribute('id') === 'confirm-button') {
      browsingHistory.push(state.currentView)
      state.generateConfirmationNumber()
      state.activateView($confirmationView)
    }
  })

  $confirmationView.addEventListener('click', function ({target}) {
    if (target.getAttribute('id') === 'continue-shopping') {
      browsingHistory.push(state.currentView)
      state.activateView($featuredView)
    }
  })
}
