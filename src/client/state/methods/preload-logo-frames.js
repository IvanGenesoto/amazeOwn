module.exports = function preloadLogoFrames(frame) {
  const {c, logoFrames} = this
  if (frame < 6) {
    frame += 1
    const src = 'images/logo-frame/' + frame + '.png'
    const id = 'frame-' + frame
    const $logoFrame = c('img', {
      src,
      id,
      'class': 'logo-frame',
      'data-target': '.bs-example-modal-sm',
      'data-toggle': 'modal'
    })
    logoFrames.push($logoFrame)
    this.preloadLogoFrames(frame)
  }
}
