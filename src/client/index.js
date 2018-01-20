const state = require('./state')()

const {
  customizeButton,
  parse,
  listen
 } = state

state.preloadLogoFrames(0)
customizeButton('#submit-button')
fetch('/featured')
  .then(parse)
  .then(state.renderListView)
state.createBackButton()
listen(state)
