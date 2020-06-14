module.exports = function generateConfirmationNumber() {
  const {constructElement: c, customizeButton} = this
  if (document.querySelector('.number')) {
    const $number = document.querySelector('.number')
    $number.remove()
  }
  const number = Math.floor(Math.random() * (9999999 - 1000000)) + 1000000
  const $orderPlaced = document.getElementById('order-completed')
  $orderPlaced.append(c('h5', {class: 'number'}, 'Your confirmation number is ' + number))
  customizeButton('#continue-shopping')
}
