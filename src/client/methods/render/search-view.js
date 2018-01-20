module.exports = function renderSearchView(results) {
  const {renderListView, $searchView} = this
  renderListView(results, $searchView)
}
