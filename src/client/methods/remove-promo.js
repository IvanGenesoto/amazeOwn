module.exports = function removePromo() {
  if (this.promoIsUp) {
    const $nav = document.getElementById('nav')
    const $promo = document.querySelector('.modal')
    $nav.removeChild($promo)
    this.promoIsUp = false
  }
}