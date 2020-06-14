module.exports = function twirl() {
  const {constructElement: c, isTwirling, logoFrames} = this
  const $logoFrame1 = document.getElementById('frame-1')
  const attributeByName = {
    id: 'catch-me', 'data-target': '.bs-example-modal-sm', 'data-toggle': 'modal'
  }
  if (isTwirling) return
  const $catchMe = c('span', attributeByName)
  const $logo = document.getElementById('logo')
  $logo.insertAdjacentElement('beforeend', $catchMe)
  forward(1)
  function forward(frame) {
    this.isTwirling = true
    if (frame > 5) return backward(6)
    ++frame
    changeFrames(frame, forward)
  }
  function changeFrames(frame, direction) {
    const $name = document.getElementById('name')
    const arrayPosition = frame - 1
    const $logoFrame = logoFrames[arrayPosition]
    $name.nextElementSibling.remove()
    $name.insertAdjacentElement('afterend', $logoFrame)
    window.setTimeout(direction, 41.67, frame)
  }
  function backward(frame) {
    --frame
    if (frame > 1) return changeFrames(frame, backward)
    const $catchMe = document.getElementById('catch-me')
    $catchMe.remove()
    const $name = document.getElementById('name')
    $name.nextElementSibling.remove()
    $name.insertAdjacentElement('afterend', $logoFrame1)
    this.isTwirling = false
  }
}
