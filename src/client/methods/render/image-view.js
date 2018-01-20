module.exorts = function renderImageView(image) {
  const {c, $imageView} = this
  const $row = c('div', {'class': 'row'}, [
    c('div', {'class': 'col-xs-12'}, [
      c('img', {'src': image})
    ])
  ])
  $imageView.appendChild($row)
}
