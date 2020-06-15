module.exports = function renderConfirmation(number) {
  const {constructElement: c} = this
  const $app = document.getElementById('app')
  $app.append(
    c('div', {id: 'confirmation', class: 'container'}, [
      c('div', {id: 'thank-you', class: 'jumbotron'}, [
        c('h2', {class: 'text-center'}, 'Thank you.'),
        c('h3', {id: 'order-completed', class: 'text-center'}, 'Your order has been completed.'),
        c('h5', {class: 'number'}, 'Your confirmation number is ' + number),
        c('button', {id: 'continue-shopping', class: 'btn btn-default own button text-center'}, 'CONTINUE SHOPPING')
      ])
    ])
  )
}
