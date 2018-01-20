module.exports = function listen(state) {

  const {
    $nav,
    renderPromo,
    browsingHistory,
    $cartView,
    renderCartView,
    currentView,
    activateView,
    isTwirling,
    $featuredView,
    $searchView,
    goToSearchResults,
    goToDetails,
    $detailsView,
    addToCart,
    $imageView,
    renderImageView,
    $checkoutView,
    updateQuantity,
    $confirmOrderView,
    renderConfirmOrder,
    generateConfirmationNumber,
    $confirmationView
  } = state

  $nav.addEventListener('click', function (event) {
    if (
      event.target.getAttribute('class') === 'logo-frame' ||
      event.target.getAttribute('id') === 'catch-me'
    ) return renderPromo()
    switch (event.target.parentElement.getAttribute('id')) {
      case 'cart-container':
        browsingHistory.push(currentView)
        $cartView.innerHTML = ''
        renderCartView()
        activateView($cartView)
        break
      case 'logo': case 'name':
        if (isTwirling === false) {
          browsingHistory.push(currentView)
          activateView($featuredView)
        }
    }
  })

  $nav.addEventListener('submit', function (event) {
    event.preventDefault()
    browsingHistory.push(currentView)
    $searchView.innerHTML = ''
    const $searchForm = document.querySelector('#search-form')
    goToSearchResults($searchForm.value)
  })

  $featuredView.addEventListener('click', function (event) {
    browsingHistory.push(currentView)
    $detailsView.innerHTML = ''
    const id = event.target.getAttribute('data-id')
    if (id) goToDetails(id)
  })

  $searchView.addEventListener('click', function (event) {
    browsingHistory.push(currentView)
    $detailsView.innerHTML = ''
    const id = event.target.getAttribute('data-id')
    if (id) goToDetails(id)
  })

  $detailsView.addEventListener('click', function (event) {
    if (event.target.getAttribute('id') === 'add-cart') {
      const id = event.target.getAttribute('data-id')
      return addToCart(id)
    }
    switch (event.target.getAttribute('class')) {
      case 'details image':
        $imageView.innerHTML = ''
        const image = event.target.getAttribute('src')
        renderImageView(image)
        activateView($imageView)
        break
      case 'thumbnail image':
        const newImage = event.target.getAttribute('src')
        const $detailsImage = document.querySelector('.details')
        const currentImage = $detailsImage.getAttribute('src')
        $detailsImage.setAttribute('src', newImage)
        event.target.setAttribute('src', currentImage)
    }
  })

  $imageView.addEventListener('click', function () {
    activateView($detailsView)
  })

  $cartView.addEventListener('click', function (event) {
    if (event.target.getAttribute('id') === 'checkout-button') {
      browsingHistory.push(currentView)
      state.orderTotal = event.target.getAttribute('data-total')
      return activateView($checkoutView)
    }
    switch (event.target.getAttribute('class')) {
      case 'cart-name': case 'cart image':
        browsingHistory.push(currentView)
        $detailsView.innerHTML = ''
        var id = event.target.getAttribute('data-id')
        goToDetails(id)
        break
      case 'plus': case 'minus':
        id = event.target.getAttribute('data-id')
        const math = event.target.getAttribute('class')
        updateQuantity(id, math)
    }
  })

  $checkoutView.addEventListener('submit', function (event) {
    event.preventDefault()
    browsingHistory.push(currentView)
    $confirmOrderView.innerHTML = ''
    renderConfirmOrder()
    activateView($confirmOrderView)
  })

  $confirmOrderView.addEventListener('click', function (event) {
    if (event.target.getAttribute('id') === 'confirm-button') {
      browsingHistory.push(currentView)
      generateConfirmationNumber()
      activateView($confirmationView)
    }
  })

  $confirmationView.addEventListener('click', function (event) {
    if (event.target.getAttribute('id') === 'continue-shopping') {
      browsingHistory.push(currentView)
      activateView($featuredView)
    }
  })
}
