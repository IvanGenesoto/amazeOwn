module.exports = function renderCheckoutView() {
  const {renderElement: c} = this
  const $app = document.getElementById('app')
  $app.append(
    c('div', {id: 'checkout', class: 'container'}, [
      c('div', {class: 'row'}, [
        c('div', {class: 'col-xs-3'}),
        c('div', {class: 'col-xs-6'}, [
          c('form', null, [
            c('div', {class: 'form-group'}, [
              c('label', {for: 'form-email'}, 'Email'),
              c('input', {type: 'email', class: 'form-control', id: 'form-email', placeholder: 'Email'})
            ]),
            c('div', {class: 'form-group'}, [
              c('label', {for: 'form-name'}, 'Name'),
              c('input', {type: 'text', class: 'form-control', id: 'form-name', placeholder: 'Name'})
            ]),
            c('div', {class: 'form-group'}, [
              c('label', {for: 'form-billing-address'}, 'Billing Address'),
              c('input', {type: 'text', class: 'form-control', id: 'form-billing-address', placeholder: 'Billing address'})
            ]),
            c('div', {class: 'form-group'}, [
              c('label', {for: 'form-shipping-address'}, 'Shipping Address'),
              c('input', {type: 'text', class: 'form-control', id: 'form-shipping-address', placeholder: 'Shipping address'})
            ]),
            c('div', {class: 'form-group'}, [
              c('label', {for: 'form-phone-number'}, 'Phone'),
              c('input', {type: 'text', class: 'form-control', id: 'form-phone-number', placeholder: 'Phone number'})
            ]),
            c('div', {class: 'form-group'}, [
              c('label', {for: 'form-credit-card'}, 'Credit Card'),
              c('input', {type: 'text', class: 'form-control', id: 'form-credit-card', placeholder: 'Credit card number'})
            ]),
            c('div', {class: 'form-group'}, [
              c('label', {for: 'form-expiration-date'}, 'Experation Date'),
              c('input', {type: 'date', class: 'form-control', id: 'form-expiration-date'})
            ]),
            c('div', {class: 'form-group'}, [
              c('label', {for: 'form-ccv'}, 'CCV'),
              c('input', {type: 'text', class: 'form-control', id: 'form-ccv', placeholder: 'CCV'})
            ]),
            c('div', {class: 'form-group'}, [
              c('label', {for: 'form-promo-code'}, 'Promo Code'),
              c('input', {type: 'text', class: 'form-control', id: 'form-promo-code', placeholder: 'Promo code'})
            ]),
            c('input', {type: 'checkbox'}),
            c('span', null, ' Send me exciting Amazeown emails!'),
            c('button', {type: 'submit', class: 'btn btn-default own button', id: 'submit-button'}, 'Submit')
          ])
        ])
      ])
    ])
  )
}
