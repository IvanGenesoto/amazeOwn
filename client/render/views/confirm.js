module.exports = function renderConfirmOrderView(valueByName) {

  const {renderElement: r, total} = this
  const $app = document.getElementById('app')

  $app.append(
    r('div', {id: 'confirm', class: 'container'}, [
      r('div', {class: 'row'}, [
        r('div', {class: 'col-xs-3'}),
        r('div', {class: 'col-xs-6'}, [
          r('div', {class: 'row'}, [
            r('div', {class: 'col-xs-12'}, [
              r('h2', null, 'Confirm Order')
            ])
          ]),
          r('div', {class: 'row'}, [
            r('div', {class: 'col-xs-12'}, [
              r('ul', {class: 'list-group'}, [
                r('li', {class: 'list-group-item'}, 'Email: ' + valueByName.email),
                r('li', {class: 'list-group-item'}, 'Name: ' + valueByName.name),
                r('li', {class: 'list-group-item'}, 'Billing Address: ' + valueByName.billing),
                r('li', {class: 'list-group-item'}, 'Shipping Address: ' + valueByName.shipping),
                r('li', {class: 'list-group-item'}, 'Phone: ' + valueByName.phone),
                r('li', {class: 'list-group-item'}, 'Credit Card: ' + valueByName.credit),
                r('li', {class: 'list-group-item'}, 'Expiration Date: ' + valueByName.expiration),
                r('li', {class: 'list-group-item'}, 'CCV: ' + valueByName.ccv),
                r('li', {class: 'list-group-item'}, 'Promo Code: ' + valueByName.promo)
              ])
            ])
          ]),
          r('div', {class: 'row'}, [
            r('div', {class: 'col-xs-12'}, [
              r('h3', {class: 'col-xs-12'}, 'Order Total: $' + total)
            ])
          ]),
          r('div', {class: 'row'}, [
            r('div', {class: 'col-xs-12'}, [
              r('button', {class: 'btn btn-default own button', id: 'confirm-button'}, 'COMPLETE ORDER')
            ])
          ])
        ])
      ])
    ])
  )
}
