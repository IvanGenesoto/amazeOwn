module.exports = function listenForPopstate() {

  const state = this

  addEventListener('popstate', ({state: historyState}) => {
    const {view, parameter} = historyState || {}
    const fetchingViews = ['featured', 'item', 'search']
    const shouldFetchData = fetchingViews.includes(view)
    state.shouldAlterHistory = false
    if (shouldFetchData) return state.fetchData(view, parameter)
    if (view) return state.fetchData('cart', undefined, true)
    state.initiate()
  })
}
