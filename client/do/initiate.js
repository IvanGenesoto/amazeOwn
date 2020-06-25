module.exports = function initiate() {

  const state = this
  const {cart} = state
  const {hash} = location
  const index = hash.indexOf('/')
  const hasParameter = index + 1 || undefined
  const parameter_ = hasParameter && hash.slice(index + 1)
  const endIndex = hasParameter && index
  const hash_ = hash.slice(1, endIndex)
  const replacingNames = ['checkout', 'confirm-order', 'confirmation']
  const shouldLoadCart = replacingNames.includes(hash_)
  const pathName = hash_ === 'cart' ? 'item' : hash_ || 'featured'
  const viewName = hash_ === 'search' ? 'list' : hash_ || 'list'
  const parameter = hash_ === 'cart' ? cart : parameter_

  if (!hash) return state.fetchData({pathName: 'featured', viewName: 'list'})
  if (!shouldLoadCart) return state.fetchData({pathName, viewName, hash, parameter})

  state.fetchData({
    pathName: 'item',
    viewName: 'cart',
    hash: '#cart',
    parameter: cart,
    shouldReplace: true
  })

}
