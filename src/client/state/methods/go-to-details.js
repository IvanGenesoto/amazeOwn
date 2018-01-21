module.exports = function goToDetails(id) {
  const state = this
  const {parse, renderDetailsView, activateView, $detailsView} = state
  fetch('/items/' + id)
    .then(parse)
    .then(renderDetailsView.bind(state))
    .then(activateView.bind(state, $detailsView))
}
