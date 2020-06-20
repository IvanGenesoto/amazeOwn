const state_ = require('./state')
const reduce = require('./reduce')
const listenByType = require('./listen')
const methodByName = require('./methods')
const rendererGroups = require('./render')
const groups = [...rendererGroups, methodByName, listenByType]
const state = groups.reduce(reduce, state_)

state.listenForClick()
state.listenForSubmit()
state.preloadFrame(0)
state.fetchData('featured', 'list')
