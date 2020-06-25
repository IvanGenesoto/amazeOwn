module.exports = function listenForPopstate() {

  const state = this

  addEventListener('popstate', ({state: fetchKit}) => {
    const {cart} = state
    const viewName = fetchKit
    const replacingNames = ['checkout', 'confirm-order', 'confirmation']
    const shouldReplace = replacingNames.includes(viewName)
    state.shouldAlterHistory = false
    if (shouldReplace) state.fetchData({
      pathName: 'item',
      viewName: 'cart',
      hash: '#cart',
      parameter: cart,
      shouldReplace: true
    })
    if (typeof viewName === 'string') return state.renderView(viewName)
    fetchKit && state.fetchData(fetchKit)
  })
}
