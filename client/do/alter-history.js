module.exports = function alterHistory(view, parameter = '', shouldReplace, argument) {

  const state = this
  const {shouldAlterHistory} = state
  const {origin} = location
  const {title} = document
  const title_ = title + ' ' + view
  const replacingViews = ['confirm', 'confirmation']
  const shouldReplace_ = shouldReplace || replacingViews.includes(view)
  const historyMethod = shouldReplace_ ? 'replaceState' : 'pushState'
  const shouldAlterHistory_ = shouldAlterHistory || shouldReplace_
  const historyState = {view, parameter}
  const beginning = view === 'featured' ? origin : '?v=' + view
  const ending = parameter ? '&p=' + parameter : ''
  const url = beginning + ending

  state.shouldAlterHistory = true
  shouldAlterHistory_ && history[historyMethod](historyState, title_, url)
  state.renderView(view, argument)
}
