module.exports = function activateView($targetView) {
  const {views} = this
  views.forEach(function (view) {
    view.classList.add('hidden')
  })
  $targetView.classList.remove('hidden')
  this.currentView = $targetView
}
