module.exports = function renderSearchView(results) {
  const $searchView = document.getElementById('search')
  this.renderListView(results, $searchView)
}
