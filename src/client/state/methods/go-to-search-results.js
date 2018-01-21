module.exports = function goToSearchResults(string) {
  const state = this
  const {parse, renderSearchView, activateView, $searchView} = state
  fetch('/search/' + string.toLowerCase())
    .then(parse)
    .then(renderSearchView.bind(state))
    .then(activateView.bind(state, $searchView))
}
