module.exports = function twirl() {
  const {c, isTwirling, logoFrames, $logoFrame1} = this
  if (isTwirling === false) {
    const $catchMe = c('span', {'id': 'catch-me', 'data-target': '.bs-example-modal-sm', 'data-toggle': 'modal'})
    const $logo = document.querySelector('#logo')
    $logo.insertAdjacentElement('beforeend', $catchMe)
    forward(1)
  }
  function forward(frame) {
    this.isTwirling = true
    if (frame > 5) {
      backward(6)
    }
    else {
      frame += 1
      changeFrames(frame, forward)
    }
  }
  function changeFrames(frame, direction) {
    const $name = document.querySelector('#name')
    const arrayPosition = frame - 1
    const $logoFrame = logoFrames[arrayPosition]
    $name.nextElementSibling.remove()
    $name.insertAdjacentElement('afterend', $logoFrame)
    window.setTimeout(direction, 41.67, frame)
  }
  function backward(frame) {
    frame -= 1
    if (frame > 1) {
      changeFrames(frame, backward)
    }
    else {
      const $catchMe = document.querySelector('#catch-me')
      $catchMe.remove()
      const $name = document.querySelector('#name')
      $name.nextElementSibling.remove()
      $name.insertAdjacentElement('afterend', $logoFrame1)
      this.isTwirling = false
    }
  }
}
