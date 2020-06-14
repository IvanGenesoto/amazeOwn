module.exports = function renderConfirmOrder() {
  const {constructElement: c, orderTotal, customizeButton} = this
  const $confirmOrderView = document.getElementById('confirm-order')
  const $email = document.getElementById('form-email')
  const $name = document.getElementById('form-name')
  const $billing = document.getElementById('form-billing-address')
  const $shipping = document.getElementById('form-shipping-address')
  const $phone = document.getElementById('form-phone-number')
  const $credit = document.getElementById('form-credit-card')
  const $expiration = document.getElementById('form-expiration-date')
  const $ccv = document.getElementById('form-ccv')
  const $promo = document.getElementById('form-promo-code')
  $confirmOrderView.append(
    c('div', {class: 'row'}, [
      c('div', {class: 'col-xs-6 offset-xs-3'}, [
        c('div', {class: 'row'}, [
          c('div', {class: 'col-xs-12'}, [
            c('h2', null, 'Confirm Order')
          ])
        ]),
        c('div', {class: 'row'}, [
          c('div', {class: 'col-xs-12'}, [
            c('ul', {class: 'list-group'}, [
              c('li', {class: 'list-group-item'}, 'Email: ' + $email.value),
              c('li', {class: 'list-group-item'}, 'Name: ' + $name.value),
              c('li', {class: 'list-group-item'}, 'Billing address: ' + $billing.value),
              c('li', {class: 'list-group-item'}, 'Shipping address: ' + $shipping.value),
              c('li', {class: 'list-group-item'}, 'Phone number: ' + $phone.value),
              c('li', {class: 'list-group-item'}, 'Credit card number: ' + $credit.value),
              c('li', {class: 'list-group-item'}, 'Expiration date: ' + $expiration.value),
              c('li', {class: 'list-group-item'}, 'CCV: ' + $ccv.value),
              c('li', {class: 'list-group-item'}, 'Promo code: ' + $promo.value)
            ])
          ])
        ]),
        c('div', {class: 'row'}, [
          c('div', {class: 'col-xs-12'}, [
            c('h3', {class: 'col-xs-12'}, 'Order Total: $' + orderTotal)
          ])
        ]),
        c('div', {class: 'row'}, [
          c('div', {class: 'col-xs-12'}, [
            c('button', {class: 'btn btn-default button', id: 'confirm-button'}, 'PLACE ORDER')
          ])
        ])
      ])
    ])
  )
  customizeButton('#confirm-button')
}
