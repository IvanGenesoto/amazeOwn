module.exports = function renderSearchView(results) {
  const {$searchView} = this
  this.renderListView(results, $searchView)
}
