module.exports = function twirl() {

  const state = this
  const {renderElement: r, isTwirling, frames} = state
  const $frame1 = document.getElementById('frame-1')
  const $logo = document.getElementById('logo')

  const attributeByName = {
    id: 'catch-me', 'data-target': '.bs-example-modal-sm', 'data-toggle': 'modal'
  }

  const $catchMe = r('span', attributeByName)

  const forward = index => {
    state.isTwirling = true
    ++index
    if (index > 5) return backward(index)
    changeFrame(index, forward)
  }

  const changeFrame = (index, direction) => {
    const $name = document.getElementById('name')
    const $bang = frames[index]
    $name.nextElementSibling.remove()
    $name.insertAdjacentElement('afterend', $bang)
    window.setTimeout(direction, 41.67, index)
  }

  const backward = index => {
    --index
    if (index > -1) return changeFrame(index, backward)
    const $catchMe = document.getElementById('catch-me')
    $catchMe.remove()
    const $name = document.getElementById('name')
    $name.nextElementSibling.remove()
    $name.insertAdjacentElement('afterend', $frame1)
    state.isTwirling = false
  }

  if (isTwirling) return

  $logo.append($catchMe)
  forward(0)
}
