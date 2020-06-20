module.exports = function renderListView([items]) {

  const {renderElement: r, getStars} = this
  const $app = document.getElementById('app')
  const $listView = r('div', {id: 'list', class: 'container'})

  const renderRow = () => {
    const $row = r('div', {class: 'row'})
    $listView.append($row, r('hr'))
    return $row
  }

  const renderColumn = (item, $row) => {
    const price = item.price.toFixed(2)
    const stars = getStars(item.rating)
    $row.append(
      r('div', {class: 'col-xs-4 clickable item', 'data-id': item.id}, [
        r('img', {class: 'list image', src: item.image, 'data-id': item.id}),
        r('h3', {'data-id': item.id}, item.name),
        r('h3', {class: 'dollar', 'data-id': item.id}, '$'),
        r('h3', {class: 'price', 'data-id': item.id}, price),
        r('img', {src: stars, class: 'rating', 'data-id': item.id})
      ])
    )
  }

  let $row

  $app.append($listView)

  items.forEach((item, index) => {
    if (index % 3 === 0) $row = renderRow()
    renderColumn(item, $row)
  })
}
