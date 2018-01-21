module.exports = function Views(state) {
  return [
    state.$featuredView,
    state.$searchView,
    state.$detailsView,
    state.$imageView,
    state.$cartView,
    state.$checkoutView,
    state.$confirmOrderView,
    state.$confirmationView
  ]
}
