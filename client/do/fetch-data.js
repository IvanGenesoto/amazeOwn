module.exports = function fetchData(view, parameter = '', shouldReplace) {

  const state = this
  const {cart, alterHistory} = state
  const isCart = view === 'cart'
  const pathName = isCart ? 'item' : view
  const parameters = isCart ? cart.map(item => item.id) : [parameter]
  const callFetch = parameter => fetch(`/${pathName}/${parameter}`)
  const parse = response => response.json()

  Promise
    .all(parameters.map(callFetch))
    .then(responses => Promise.all(responses.map(parse)))
    .then(alterHistory.bind(state, view, parameter, shouldReplace))
}
