module.exports = function renderConfirmation() {
  const {constructElement: c} = this
  const $confirmation = document.getElementById('confirmation')
  $confirmation.append(
    c('div', {id: 'thank-you', class: 'jumbotron'}, [
      c('h2', {class: 'text-center'}, 'Thank you.'),
      c('h3', {id: 'order-completed', class: 'text-center'}, 'Your order has been completed.'),
      c('button', {id: 'continue-shopping', class: 'btn btn-default button text-center'}, 'CONTINUE SHOPPING')
    ])
  )
}
