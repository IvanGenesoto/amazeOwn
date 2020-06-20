module.exports = function fetchData(pathName, viewName, parameter = '') {

  const state = this
  const {renderView} = state
  const parameters = Array.isArray(parameter) ? parameter : [parameter]
  const parse = response => response.json()

  const getParameter = parameter => parameter && typeof parameter === 'object'
    ? parameter.id
    : parameter

  const callFetch = parameter => {
    const parameter_ = getParameter(parameter)
    return fetch(`/${pathName}/${parameter_}`)
  }

  Promise
    .all(parameters.map(callFetch))
    .then(responses => Promise.all(responses.map(parse)))
    .then(renderView.bind(state, viewName))
}
