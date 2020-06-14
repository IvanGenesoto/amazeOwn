module.exports = function goToDetails(id) {
  const state = this
  const {parse, renderDetailsView, activateView} = state
  const $detailsView = document.getElementById('details')
  fetch('/items/' + id)
    .then(parse)
    .then(renderDetailsView.bind(state))
    .then(activateView.bind(state, $detailsView))
}
