module.exports = function listenForSubmit() {

  const state = this
  const $app = document.getElementById('app')

  $app.addEventListener('submit', function (event) {
    const {target: $target} = event
    const id = $target.getAttribute('id')
    const $searchInput = document.getElementById('search-input')
    const {value: query} = $searchInput
    event.preventDefault()
    if (id === 'search-form') return state.fetchData('search', 'list', query)
    const idByName = {
      email: 'form-email',
      name: 'form-name',
      billing: 'form-billing-address',
      shipping: 'form-shipping-address',
      phone: 'form-phone-number',
      credit: 'form-credit-card',
      expiration: 'form-expiration-date',
      ccv: 'form-ccv',
      promo: 'form-promo-code'
    }
    const appendValue = function (valueByName, [name, id]) {
      const $input = document.getElementById(id)
      const {value} = $input
      valueByName[name] = value
      return valueByName
    }
    const valueByName = Object.entries(idByName).reduce(appendValue, {})
    state.renderView('confirmOrder', valueByName)
  })
}
