module.exports = function preloadFrame(index) {
  const state = this
  const {renderElement: r, frames} = state
  const src = 'images/bang/' + index + '.png'
  const id = 'frame-' + index
  const attributeByName = {
    src,
    id,
    class: 'bang',
    'data-target': '.bs-example-modal-sm',
    'data-toggle': 'modal'
  }
  const $bang = r('img', attributeByName)
  frames.push($bang)
  ++index
  index < 6 && state.preloadFrame(index)
}
