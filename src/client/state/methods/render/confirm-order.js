module.exports = function renderConfirmOrder() {
  const {c, orderTotal, $confirmOrderView, customizeButton} = this
  const $email = document.querySelector('#form-email')
  const $name = document.querySelector('#form-name')
  const $billing = document.querySelector('#form-billing-address')
  const $shipping = document.querySelector('#form-shipping-address')
  const $phone = document.querySelector('#form-phone-number')
  const $credit = document.querySelector('#form-credit-card')
  const $expiration = document.querySelector('#form-expiration-date')
  const $ccv = document.querySelector('#form-ccv')
  const $promo = document.querySelector('#form-promo-code')
  const $confirmOrder = c('div', {class: 'row'}, [
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
  $confirmOrderView.appendChild($confirmOrder)
  customizeButton('#confirm-button')
}
