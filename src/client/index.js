const state_ = require('./state')
const reduce = require('./reduce')
const handlerByName = require('./handle')
const rendererGroups = require('./render')
const groups = [...rendererGroups, handlerByName]
const state = groups.reduce(reduce, state_)

state.listen()
state.preloadFrame(0)
state.fetchData('featured', 'list')
