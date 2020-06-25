module.exports = function renderPromo() {

  const state = this
  const {renderElement: r} = state
  const $nav = document.getElementById('nav')
  const promoText = 'You\'re quick! Use promo code CAUGHTME for 15% off.'

  const attributeByName = {
    id: 'promo',
    class: 'modal fade bs-example-modal-sm',
    tabindex: '-1',
    role: 'dialog',
    'aria-labelledby': 'mySmallModalLabel'
  }

  state.removePromo()
  state.promoIsUp = true

  $nav.prepend(
    r('div', attributeByName, [
      r('div', {class: 'modal-dialog modal-sm', role: 'document'}, [
        r('div', {class: 'modal-content text-center'}, promoText)
      ])
    ])
  )
}
