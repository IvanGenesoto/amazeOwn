module.exports = function goToItem(id) {
  const state = this
  const {renderView, parse} = state
  fetch('/item/' + id)
    .then(parse)
    .then(renderView.bind(state, 'item'))
}
