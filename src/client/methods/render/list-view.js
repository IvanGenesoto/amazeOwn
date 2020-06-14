module.exports = function renderListView(list, view) {
  const {constructElement: c, getStars} = this
  const $featuredView = document.getElementById('featured')
  let $row
  if (!view) view = $featuredView
  list.forEach(function (item, index) {
    if (index % 3 === 0) $row = renderRow()
    renderColumn(item, $row)
  })
  function renderRow() {
    const $row = c('div', {class: 'row'})
    view.append($row, c('hr'))
    return $row
  }
  function renderColumn(item, $row) {
    const price = item.price.toFixed(2)
    const stars = getStars(item.rating)
    $row.append(
      c('div', {class: 'col-xs-4 clickable item', 'data-id': item.id}, [
        c('img', {class: 'list image', src: item.image, 'data-id': item.id}),
        c('h3', {'data-id': item.id}, item.name),
        c('h3', {class: 'dollar', 'data-id': item.id}, '$'),
        c('h3', {class: 'price', 'data-id': item.id}, price),
        c('img', {src: stars, class: 'rating', 'data-id': item.id})
      ])
    )
  }
}
