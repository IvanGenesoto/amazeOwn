module.exports = function goToFeatured() {
  const state = this
  const {parse, renderView} = state
  fetch('/featured/')
    .then(parse)
    .then(renderView.bind(state, 'list'))
}
