module.exports = function renderView(name, historyKit, argument) {

  const state = this
  const {shouldAlterHistory} = state
  const {pathName, hash = '', parameter = '', shouldReplaceState} = historyKit || {}
  const {origin} = location
  const isArray = Array.isArray(parameter)
  const parameter_ = parameter && !isArray ? '/' + parameter : ''
  const {title} = document
  const title_ = title + ' ' + name
  const replacingNames = ['confirm-order', 'confirmation']
  const shouldReplace_ = shouldReplaceState || replacingNames.includes(name)
  const historyMethod = shouldReplace_ ? 'replaceState' : 'pushState'
  const shouldAlterHistory_ = shouldAlterHistory || shouldReplace_
  const historyState = historyKit || name
  const $app = document.getElementById('app')

  const url =
      hash || parameter_ ? hash + parameter_
    : pathName === 'featured' ? origin
    : '#' + name

  const renderViewByName = {
    cart: state.renderCartView,
    checkout: state.renderCheckoutView,
    'confirm-order': state.renderConfirmOrderView,
    confirmation: state.renderConfirmationView,
    item: state.renderItemView,
    list: state.renderListView
  }

  const render = renderViewByName[name]

  shouldAlterHistory_ && history[historyMethod](historyState, title_, url)
  state.shouldAlterHistory = true
  $app.innerHTML = ''
  state.renderNav()
  render.call(state, argument)
}
