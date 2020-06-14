const state = require('./state')()
const {renderListView, parse} = state

state.renderNav()
state.renderContainers()
state.renderCheckout()
state.renderConfirmation()
state.preloadLogoFrames(0)
state.listen()

fetch('/featured')
  .then(parse)
  .then(renderListView.bind(state))
