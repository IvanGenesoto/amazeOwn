module.exports = function State() {

  const reducers = require('./reducers')
  const {append, appendAll, preventWrites, preventConfiguration} = reducers
  const groups = [require('./methods')(reducers)]
  const $featuredView = document.getElementById('featured')

  let state = groups.reduce(appendAll.bind({append}), Object.create(null))

  state.logoFrames = []
  state.browsingHistory = []
  state.cart = []
  state = Object.keys(state).reduce(preventWrites, state)
  state.isTwirling = false
  state.promoIsUp = false
  state.itemCount = 0
  state.total = 0
  state.orderTotal = 0
  state.currentView = $featuredView

  return Object.keys(state).reduce(preventConfiguration, state)
}
