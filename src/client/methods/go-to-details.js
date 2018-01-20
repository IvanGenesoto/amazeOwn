module.exports = function goToDetails(id) {
  const {parse, renderDetailsView, activateView, $detailsView} = this
  fetch('/items/' + id)
    .then(parse)
    .then(renderDetailsView)
    .then(activateView($detailsView))
}
