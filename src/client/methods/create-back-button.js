module.exports = function createBackButton() {
  const {c, browsingHistory, activateView} = this
  const $nav = document.querySelector('#nav')
  const $back = c('button', {'class': 'btn btn-default', 'id': 'back'}, 'BACK')
  $nav.appendChild($back)
  $back.addEventListener('click', function(event) {
    if (browsingHistory.length > 0) {
      const last = browsingHistory.length - 1
      const previous = browsingHistory[last]
      activateView(previous)
      browsingHistory.splice(last)
    }
  })
}
