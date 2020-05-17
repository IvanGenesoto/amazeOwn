module.exports = function listen() {

  const state = this

  const {
    $nav,
    $featuredView,
    $searchView,
    $detailsView,
    $imageView,
    $cartView,
    $checkoutView,
    $confirmOrderView,
    $confirmationView,
    browsingHistory,
    isTwirling
  } = state

  $nav.addEventListener('click', function (event) {
    if (
      event.target.getAttribute('class') === 'logo-frame' ||
      event.target.getAttribute('id') === 'catch-me'
    ) return state.renderPromo()
    switch (event.target.parentElement.getAttribute('id')) {
      case 'cart-container':
        browsingHistory.push(state.currentView)
        $cartView.innerHTML = ''
        state.renderCartView()
        state.activateView($cartView)
        break
      case 'logo': case 'name':
        if (isTwirling === true) return
        browsingHistory.push(state.currentView)
        state.activateView($featuredView)
    }
  })

  $nav.addEventListener('submit', function (event) {
    event.preventDefault()
    browsingHistory.push(state.currentView)
    $searchView.innerHTML = ''
    const $searchForm = document.querySelector('#search-form')
    state.goToSearchResults($searchForm.value)
  })

  $featuredView.addEventListener('click', function (event) {
    browsingHistory.push(state.currentView)
    $detailsView.innerHTML = ''
    const id = event.target.dataset.id
    if (id) state.goToDetails(id)
  })

  $searchView.addEventListener('click', function (event) {
    browsingHistory.push(state.currentView)
    $detailsView.innerHTML = ''
    const id = event.target.dataset.id
    if (id) state.goToDetails(id)
  })

  $detailsView.addEventListener('click', function (event) {
    if (event.target.getAttribute('id') === 'add-cart') {
      const id = event.target.dataset.id
      return state.addToCart(id)
    }
    switch (event.target.getAttribute('class')) {
      case 'details image':
        $imageView.innerHTML = ''
        const image = event.target.getAttribute('src')
        state.renderImageView(image)
        state.activateView($imageView)
        break
      case 'thumbnailed image':
        const newImage = event.target.getAttribute('src')
        const $detailsImage = document.querySelector('.details')
        const currentImage = $detailsImage.getAttribute('src')
        $detailsImage.setAttribute('src', newImage)
        event.target.setAttribute('src', currentImage)
    }
  })

  $imageView.addEventListener('click', function () {
    state.activateView($detailsView)
  })

  $cartView.addEventListener('click', function (event) {
    if (event.target.getAttribute('id') === 'checkout-button') {
      browsingHistory.push(state.currentView)
      state.orderTotal = event.target.getAttribute('data-total')
      return state.activateView($checkoutView)
    }
    switch (event.target.getAttribute('class')) {
      case 'cart-name': case 'cart image':
        browsingHistory.push(state.currentView)
        $detailsView.innerHTML = ''
        var id = event.target.dataset.id
        state.goToDetails(id)
        break
      case 'plus': case 'minus':
        id = event.target.dataset.id
        const plusOrMinus = event.target.getAttribute('class')
        state.updateQuantity(id, plusOrMinus)
    }
  })

  $checkoutView.addEventListener('submit', function (event) {
    event.preventDefault()
    browsingHistory.push(state.currentView)
    $confirmOrderView.innerHTML = ''
    state.renderConfirmOrder()
    state.activateView($confirmOrderView)
  })

  $confirmOrderView.addEventListener('click', function (event) {
    if (event.target.getAttribute('id') === 'confirm-button') {
      browsingHistory.push(state.currentView)
      state.generateConfirmationNumber()
      state.activateView($confirmationView)
    }
  })

  $confirmationView.addEventListener('click', function (event) {
    if (event.target.getAttribute('id') === 'continue-shopping') {
      browsingHistory.push(state.currentView)
      state.activateView($featuredView)
    }
  })
}
