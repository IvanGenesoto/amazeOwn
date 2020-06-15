module.exports = function renderImage(src) {
  const {constructElement: c} = this
  const $itemView = document.getElementById('item')
  const $app = document.getElementById('app')
  $itemView.classList.add('hidden')
  $app.append(
    c('div', {id: 'image', class: 'container'}, [
      c('div', {class: 'clickable row'}, [
        c('div', {class: 'col-xs-12'}, [
          c('img', {src: src, id: 'full-sized-image'})
        ])
      ])
    ])
  )
}
