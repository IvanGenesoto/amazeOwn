module.exports = function removePromo() {
  if (this.promoIsUp === true) {
    const $nav = document.querySelector('#nav')
    const $promo = document.querySelector('.modal')
    $nav.removeChild($promo)
    this.promoIsUp = false
  }
}
