module.exports = function renderContainers() {
  const {constructElement: c} = this
  const $app = document.getElementById('app')
  $app.append(c('div', {id: 'featured', class: 'container'}))
  $app.append(c('div', {id: 'search', class: 'hidden container'}))
  $app.append(c('div', {id: 'details', class: 'hidden container'}))
  $app.append(c('div', {id: 'image', class: 'hidden container'}))
  $app.append(c('div', {id: 'cart', class: 'hidden container'}))
  $app.append(c('div', {id: 'checkout', class: 'hidden container'}))
  $app.append(c('div', {id: 'confirm-order', class: 'hidden container'}))
  $app.append(c('div', {id: 'confirmation', class: 'hidden container'}))
}
