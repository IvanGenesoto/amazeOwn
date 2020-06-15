module.exports = function renderConfirmOrderView(valueByName) {
  const {renderElement: c, total} = this
  const $app = document.getElementById('app')
  $app.append(
    c('div', {id: 'confirm-order', class: 'container'}, [
      c('div', {class: 'row'}, [
        c('div', {class: 'col-xs-3'}),
        c('div', {class: 'col-xs-6'}, [
          c('div', {class: 'row'}, [
            c('div', {class: 'col-xs-12'}, [
              c('h2', null, 'Confirm Order')
            ])
          ]),
          c('div', {class: 'row'}, [
            c('div', {class: 'col-xs-12'}, [
              c('ul', {class: 'list-group'}, [
                c('li', {class: 'list-group-item'}, 'Email: ' + valueByName.email),
                c('li', {class: 'list-group-item'}, 'Name: ' + valueByName.name),
                c('li', {class: 'list-group-item'}, 'Billing Address: ' + valueByName.billing),
                c('li', {class: 'list-group-item'}, 'Shipping Address: ' + valueByName.shipping),
                c('li', {class: 'list-group-item'}, 'Phone: ' + valueByName.phone),
                c('li', {class: 'list-group-item'}, 'Credit Card: ' + valueByName.credit),
                c('li', {class: 'list-group-item'}, 'Expiration Date: ' + valueByName.expiration),
                c('li', {class: 'list-group-item'}, 'CCV: ' + valueByName.ccv),
                c('li', {class: 'list-group-item'}, 'Promo Code: ' + valueByName.promo)
              ])
            ])
          ]),
          c('div', {class: 'row'}, [
            c('div', {class: 'col-xs-12'}, [
              c('h3', {class: 'col-xs-12'}, 'Order Total: $' + total)
            ])
          ]),
          c('div', {class: 'row'}, [
            c('div', {class: 'col-xs-12'}, [
              c('button', {class: 'btn btn-default own button', id: 'confirm-button'}, 'COMPLETE ORDER')
            ])
          ])
        ])
      ])
    ])
  )
}
