const doingGroup = require('./do')
const listeningGroup = require('./listen')
const renderingGroups = require('./render')
const reduce = require('./reduce')
const groups = [doingGroup, listeningGroup, ...renderingGroups]
const state = groups.reduce(reduce, {})
const storage = state.storage = state.createStorage()

state.cart = storage.getItem('cart') || []
state.listenForClick()
state.listenForSubmit()
state.preloadFrame()
state.fetchData('featured', 'list')
