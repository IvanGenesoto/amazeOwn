module.exports = function State() {
  let state = {
    c: require('./create-element'),
    $nav: document.querySelector('#nav'),
    $featuredView: document.querySelector('#featured'),
    $searchView: document.querySelector('#search'),
    $detailsView: document.querySelector('#details'),
    $imageView: document.querySelector('#image'),
    $cartView: document.querySelector('#cart'),
    $checkoutView: document.querySelector('#checkout'),
    $confirmOrderView: document.querySelector('#confirm-order'),
    $confirmationView: document.querySelector('#confirmation'),
    $logoFrame1: document.querySelector('#logo-frame-1'),
    logoFrames: [],
    browsingHistory: [],
    cart: [],
    views: [
      this.$featuredView,
      this.$searchView,
      this.$detailsView,
      this.$imageView,
      this.$cartView,
      this.$checkoutView,
      this.$confirmOrderView,
      this.$confirmationView
    ]
  }

  state = Object.keys(state).reduce(
    key => Object.defineProperty(state, key, {writable: false}),
    state
  )

  state.isTwirling = false
  state.promoIsUp = false
  state.itemCount = 0
  state.total = 0
  state.orderTotal = 0
  state.currentView = state.$featuredView

  return Object.keys(state).reduce(
    key => Object.defineProperty(state, key, {configurable: false}),
    state
  )
}
