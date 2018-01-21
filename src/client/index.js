const state = require('./state')()

const {renderListView, customizeButton, parse} = state

state.preloadLogoFrames(0)
customizeButton('#submit-button')
fetch('/featured')
  .then(parse)
  .then(renderListView.bind(state))
state.createBackButton()
state.listen()
