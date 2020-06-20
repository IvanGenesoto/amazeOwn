module.exports = function twirl() {
  const state = this
  const {renderElement: r, isTwirling, frames} = state
  const $frame1 = document.getElementById('frame-1')
  const attributeByName = {
    id: 'catch-me', 'data-target': '.bs-example-modal-sm', 'data-toggle': 'modal'
  }
  if (isTwirling) return
  const $catchMe = r('span', attributeByName)
  const $logo = document.getElementById('logo')
  $logo.append($catchMe)
  forward(0)
  function forward(index) {
    state.isTwirling = true
    ++index
    if (index > 5) return backward(index)
    changeFrame(index, forward)
  }
  function changeFrame(index, direction) {
    const $name = document.getElementById('name')
    const $bang = frames[index]
    $name.nextElementSibling.remove()
    $name.insertAdjacentElement('afterend', $bang)
    window.setTimeout(direction, 41.67, index)
  }
  function backward(index) {
    --index
    if (index > -1) return changeFrame(index, backward)
    const $catchMe = document.getElementById('catch-me')
    $catchMe.remove()
    const $name = document.getElementById('name')
    $name.nextElementSibling.remove()
    $name.insertAdjacentElement('afterend', $frame1)
    state.isTwirling = false
  }
}
