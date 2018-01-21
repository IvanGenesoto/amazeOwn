module.exports = function renderPromo() {
  const {c} = this
  this.removePromo()
  const $nav = document.querySelector('#nav')
  const promoText = 'You\'re quick! Use promo code CAUGHTME for 15% off.'
  const $promo = c('div', {'class': 'modal fade bs-example-modal-sm', 'tabindex': '-1', 'role': 'dialog', 'aria-labelledby': 'mySmallModalLabel'}, [
    c('div', {'class': 'modal-dialog modal-sm', 'role': 'document'}, [
      c('div', {'class': 'modal-content text-center'}, promoText)
    ])
  ])
  $nav.insertAdjacentElement('afterbegin', $promo)
  this.promoIsUp = true
}
