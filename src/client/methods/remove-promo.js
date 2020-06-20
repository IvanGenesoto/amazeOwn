module.exports = function removePromo() {
  const state = this
  if (!state.promoIsUp) return
  const $promo = document.getElementById('promo')
  $promo.remove()
  state.promoIsUp = false
}
