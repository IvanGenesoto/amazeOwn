module.exports = function generateConfirmationNumber() {
  const {c, customizeButton} = this
  if (document.querySelector('.number')) {
    const $number = document.querySelector('.number')
    $number.remove()
  }
  const number = Math.floor(Math.random() * (9999999 - 1000000)) + 1000000
  const $orderPlaced = document.querySelector('#order-completed')
  const $confirmationNumber = c('h5', {class: 'number'}, 'Your confirmation number is ' + number)
  $orderPlaced.appendChild($confirmationNumber)
  customizeButton('#continue-shopping')
}
