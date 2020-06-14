module.exports = function preloadLogoFrames(frame) {
  const {constructElement: c, logoFrames} = this
  if (frame >= 6) return
  ++frame
  const src = 'images/logo-frame/' + frame + '.png'
  const id = 'frame-' + frame
  const attributeByName = {
    src,
    id,
    class: 'logo-frame',
    'data-target': '.bs-example-modal-sm',
    'data-toggle': 'modal'
  }
  const $logoFrame = c('img', attributeByName)
  logoFrames.push($logoFrame)
  this.preloadLogoFrames(frame)
}
