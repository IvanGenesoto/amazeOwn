module.exports = function State() {

  const {appendAll, preventWrites, preventConfiguration} = require('./reducers')

  const groups = [require('./methods')(), require('./elements')]
  let state = groups.reduce(appendAll, Object.create(null))

  state.views = require('./views')(state)
  state.logoFrames = []
  state.browsingHistory = []
  state.cart = []

  state = Object.keys(state).reduce(preventWrites, state)

  state.isTwirling = false
  state.promoIsUp = false
  state.itemCount = 0
  state.total = 0
  state.orderTotal = 0
  state.currentView = state.$featuredView

  return Object.keys(state).reduce(preventConfiguration, state)
}
