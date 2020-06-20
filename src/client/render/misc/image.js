module.exports = function renderImage(src) {
  const {renderElement: r} = this
  const $itemView = document.getElementById('item')
  const $app = document.getElementById('app')
  $itemView.classList.add('hidden')
  $app.append(
    r('div', {id: 'image', class: 'container'}, [
      r('div', {class: 'clickable row'}, [
        r('div', {class: 'col-xs-12'}, [
          r('img', {src: src, id: 'full-sized-image'})
        ])
      ])
    ])
  )
}
