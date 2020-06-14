module.exports = function createBackButton() {
  const state = this
  const {constructElement: c, browsingHistory} = state
  const $nav = document.querySelector('#nav')
  const $back = c('button', {class: 'btn btn-default', id: 'back'}, 'BACK')
  $nav.append($back)
  $back.addEventListener('click', function(event) {
    if (!browsingHistory.length) return
    const previous = browsingHistory.pop()
    state.activateView(previous)
  })
}
