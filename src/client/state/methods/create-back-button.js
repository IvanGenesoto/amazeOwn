module.exports = function createBackButton() {
  const state = this
  const {c, browsingHistory} = state
  const $nav = document.querySelector('#nav')
  const $back = c('button', {class: 'btn btn-default', id: 'back'}, 'BACK')
  $nav.appendChild($back)
  $back.addEventListener('click', function(event) {
    if (!browsingHistory.length) return
    const previous = browsingHistory.pop()
    state.activateView(previous)
  })
}
