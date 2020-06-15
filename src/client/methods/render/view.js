module.exports = function renderView(name, ...rest) {
  const state = this
  const {renderViewByName} = state
  const render = renderViewByName[name]
  const $app = document.getElementById('app')
  state.currentView = name
  $app.innerHTML = ''
  state.renderNav()
  render.call(state, ...rest)
}
