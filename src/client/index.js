const state = require('./state')()

state.listen()
state.preloadFrame(0)
state.fetchData('featured', 'list')
