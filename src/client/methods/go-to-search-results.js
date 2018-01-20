module.exports = function goToSearchResults(string) {
  const {parse, renderSearchView, activateView, $searchView} = this
  fetch('/search/' + string.toLowerCase())
    .then(parse)
    .then(renderSearchView)
    .then(activateView($searchView))
}
