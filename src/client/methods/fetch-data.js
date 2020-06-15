module.exports = function fetchData(pathName, viewName, parameter = '') {
  const state = this
  const {parse, renderView} = state
  fetch(`/${pathName}/${parameter}`)
    .then(parse)
    .then(renderView.bind(state, viewName))
}
