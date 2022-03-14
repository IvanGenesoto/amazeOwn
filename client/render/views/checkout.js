module.exports = function renderCheckoutView() {

  const {renderElement: r} = this
  const $app = document.getElementById('app')

  $app.append(
    r('div', {id: 'checkout', class: 'container'}, [
      r('div', {class: 'row'}, [
        r('div', {class: 'col-xs-3'}),
        r('div', {class: 'col-xs-6'}, [
          r('form', null, [
            r('div', {class: 'form-group'}, [
              r('label', {for: 'form-email'}, 'Email'),
              r('input', {type: 'email', class: 'form-control', id: 'form-email', placeholder: 'Email'})
            ]),
            r('div', {class: 'form-group'}, [
              r('label', {for: 'form-name'}, 'Name'),
              r('input', {type: 'text', class: 'form-control', id: 'form-name', placeholder: 'Name'})
            ]),
            r('div', {class: 'form-group'}, [
              r('label', {for: 'form-billing-address'}, 'Billing Address'),
              r('input', {type: 'text', class: 'form-control', id: 'form-billing-address', placeholder: 'Billing address'})
            ]),
            r('div', {class: 'form-group'}, [
              r('label', {for: 'form-shipping-address'}, 'Shipping Address'),
              r('input', {type: 'text', class: 'form-control', id: 'form-shipping-address', placeholder: 'Shipping address'})
            ]),
            r('div', {class: 'form-group'}, [
              r('label', {for: 'form-phone-number'}, 'Phone'),
              r('input', {type: 'text', class: 'form-control', id: 'form-phone-number', placeholder: 'Phone number'})
            ]),
            r('div', {class: 'form-group'}, [
              r('label', {for: 'form-credit-card'}, 'Credit Card'),
              r('input', {type: 'text', class: 'form-control', id: 'form-credit-card', placeholder: 'Credit card number'})
            ]),
            r('div', {class: 'form-group'}, [
              r('label', {for: 'form-expiration-date'}, 'Expiration Date'),
              r('input', {type: 'date', class: 'form-control', id: 'form-expiration-date'})
            ]),
            r('div', {class: 'form-group'}, [
              r('label', {for: 'form-ccv'}, 'CCV'),
              r('input', {type: 'text', class: 'form-control', id: 'form-ccv', placeholder: 'CCV'})
            ]),
            r('div', {class: 'form-group'}, [
              r('label', {for: 'form-promo-code'}, 'Promo Code'),
              r('input', {type: 'text', class: 'form-control', id: 'form-promo-code', placeholder: 'Promo code'})
            ]),
            r('input', {type: 'checkbox'}),
            r('span', null, ' Send me exciting Amazeown emails!'),
            r('button', {type: 'submit', class: 'btn btn-default own button', id: 'submit-button'}, 'Submit')
          ])
        ])
      ])
    ])
  )
}
