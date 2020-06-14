module.exports = function renderImageView(image) {
  const {constructElement: c} = this
  const $imageView = document.getElementById('image')
  $imageView.append(
    c('div', {class: 'clickable row'}, [
      c('div', {class: 'col-xs-12'}, [
        c('img', {src: image})
      ])
    ])
  )
}
