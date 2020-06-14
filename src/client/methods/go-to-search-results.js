module.exports = function goToSearchResults(string) {
  const state = this
  const {parse, renderSearchView, activateView} = state
  const $searchView = document.getElementById('search')
  fetch('/search/' + string.toLowerCase())
    .then(parse)
    .then(renderSearchView.bind(state))
    .then(activateView.bind(state, $searchView))
}
