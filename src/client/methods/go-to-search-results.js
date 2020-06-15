module.exports = function goToSearchResults(string) {
  const state = this
  const {parse, renderView} = state
  fetch('/search/' + string.toLowerCase())
    .then(parse)
    .then(renderView.bind(state, 'list'))
}
