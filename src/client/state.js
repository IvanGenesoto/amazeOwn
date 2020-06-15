module.exports = function State() {

  const reducers = require('./reducers')
  const {append, appendAll, preventWrites, preventConfiguration} = reducers
  const groups = [require('./methods')(reducers)]

  let state = groups.reduce(appendAll.bind({append}), Object.create(null))

  state.frames = []
  state.cart = []
  state = Object.keys(state).reduce(preventWrites, state)
  state.isTwirling = false
  state.promoIsUp = false
  state.itemCount = 0
  state.total = 0
  state.orderTotal = 0

  return Object.keys(state).reduce(preventConfiguration, state)
}
