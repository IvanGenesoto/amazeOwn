module.exports = function renderListView(list, view) {
  const {c, $featuredView, getStars} = this
  let $row
  let itemsInRow = 0
  if (!view) view = $featuredView
  list.forEach(function (item) {
    function buildRow() {
      $row = c('div', {class: 'row'})
      view.appendChild($row)
      const $line = c('hr')
      view.appendChild($line)
    }
    function buildColumn() {
      const price = item.price.toFixed(2)
      const stars = getStars(item.rating)
      const $column = c('div', {class: 'col-xs-4 clickable item', 'data-id': item.id}, [
        c('img', {class: 'list image', src: item.image, 'data-id': item.id}),
        c('h3', {'data-id': item.id}, item.name),
        c('h3', {class: 'dollar', 'data-id': item.id}, '$'),
        c('h3', {class: 'price', 'data-id': item.id}, price),
        c('img', {src: stars, class: 'rating', 'data-id': item.id})
      ])
      $row.appendChild($column)
      ++itemsInRow
    }
    if (itemsInRow === 0 || itemsInRow % 3 === 0) {
      buildRow()
    }
    buildColumn()
  })
}
