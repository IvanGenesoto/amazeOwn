module.exports = function initiate() {

  const state = this
  const url = new URL(location)
  const parameters = url.searchParams
  const view = parameters.get('v')
  const parameter = parameters.get('p')
  const cartViews = ['cart', 'checkout', 'confirm', 'confirmation']
  const otherViews = ['item', 'search']
  const shouldFetchCart = cartViews.includes(view)
  const isOther = otherViews.includes(view)

  if (shouldFetchCart) return state.fetchData('cart', undefined, true)
  if (isOther) return state.fetchData(view, parameter)

  state.fetchData('featured')

}
