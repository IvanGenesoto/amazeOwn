module.exports = function preloadLogoFrames(frame) {
  const {c, logoFrames} = this
  if (frame < 6) {
    frame += 1
    const logoFrameId = 'logo-frame-' + frame
    const logoFrame = 'images/logo-frame/' + frame + '.png'
    const $logoFrame = c('img', {'class': 'logo-frame', 'id': logoFrameId, 'src': logoFrame, 'data-target': '.bs-example-modal-sm', 'data-toggle': 'modal'})
    logoFrames.push($logoFrame)
    this.preloadLogoFrames(frame)
  }
}
