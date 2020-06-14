module.exports = function activateView($targetView) {
  const views = [
    document.getElementById('featured'),
    document.getElementById('search'),
    document.getElementById('details'),
    document.getElementById('image'),
    document.getElementById('cart'),
    document.getElementById('checkout'),
    document.getElementById('confirm-order'),
    document.getElementById('confirmation')
  ]
  views.forEach(view => view.classList.add('hidden'))
  $targetView.classList.remove('hidden')
  this.currentView = $targetView
}
