module.exports = function renderPromo() {
  const {constructElement: c} = this
  this.removePromo()
  const $nav = document.getElementById('nav')
  const promoText = 'You\'re quick! Use promo code CAUGHTME for 15% off.'
  const attributeByName = {
    class: 'modal fade bs-example-modal-sm',
    tabindex: '-1',
    role: 'dialog',
    'aria-labelledby': 'mySmallModalLabel'
  }
  this.promoIsUp = true
  $nav.prepend(
    c('div', attributeByName, [
      c('div', {class: 'modal-dialog modal-sm', role: 'document'}, [
        c('div', {class: 'modal-content text-center'}, promoText)
      ])
    ])
  )
}
