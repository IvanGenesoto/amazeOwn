/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-undef-init */
/* eslint-disable no-cond-assign */
/* eslint-disable no-constant-condition */

var views = [
  $listView = document.querySelector('#list'),
  $detailsView = document.querySelector('#details'),
  $imageView = document.querySelector('#image'),
  $cartView = document.querySelector('#cart'),
  $checkoutView = document.querySelector('#checkout')
]

function activeView(active) {
  views.forEach(function (view) {
    view.classList.add('hidden')
  })
  active.classList.remove('hidden')
}

function buildElement(tag, parent, attributes, text) {
  var $element = document.createElement(tag)
  if (attributes !== undefined) {
    for (var key in attributes) {
      $element.setAttribute(key, attributes[key])
    }
  }
  if (text !== undefined) {
    $element.textContent = text
  }
  if (parent !== undefined) {
    parent.appendChild($element)
  }
  return $element
}

function getStars(rating) {
  stars = 'stars/' + rating + '.png'
}

function renderListView() {
  var $row
  var itemsInRow = 0
  items.forEach(function (item) {
    function buildRow() {
      $row = b('div', $listView, {'class': 'row'})
      var $line = b('hr', $listView)
    }
    function buildColumn() {
      var $column = b('div', $row, {'class': 'col-xs-4 item'})
      var $image = b('img', $column, {'class': 'image', 'src': item.image})
      var $name = b('h2', n, n, item.name)
      $column.insertAdjacentElement('beforeend', $name)
      var $price = b('h3')
      var price = item.price.toFixed(2)
      $price.textContent = '$' + price
      $column.insertAdjacentElement('beforeend', $price)
      getStars(item.rating)
      var $rating = b('img', n, {'src': stars})
      $column.insertAdjacentElement('beforeend', $rating)
      itemsInRow += 1
      $column.addEventListener('click', function(event) {
        if (event.target = true) {
          var id = item.id
          renderDetailsView(id)
          activeView($detailsView)
        }
      })
    }
    if (itemsInRow === 0 || itemsInRow % 3 === 0) {
      buildRow()
    }
    buildColumn()
  })
}

function getItem(number) {
  items.forEach(function(item) {
    for (var id in item) {
      if (item[id] === number) {
        selectedItem = item
      }
    }
  })
}

function renderDetailsView(id) {
  getItem(id)
  var $row = b('div', $detailsView, {'class': 'row'})
  var $imageColumn = b('div', $row, {'class': 'col-xs-4'})
  var $detailsColumn = b('div', $row, {'class': 'col-xs-8 details'})
  var $image = b('img', $imageColumn, {'class': 'image details', 'src': selectedItem.image})
  $image.addEventListener('click', function(event) {
    if (event.target = true) {
      renderImageView(selectedItem.image)
      activeView($imageView)
    }
  })
  $imageColumn.appendChild($image)
  var $name = b('h2', $detailsColumn, n, selectedItem.name)
  getStars(selectedItem.rating)
  var $rating = b('img', $detailsColumn, {'src': stars})
  var $line = b('hr', $detailsColumn)
  var $details = b('p', $detailsColumn, n, selectedItem.description)
  var $button = b('button', $detailsView, {'class': 'btn btn-default back'}, 'BACK')
  $button.addEventListener('click', function(event) {
    if (event.target = true) {
      $detailsView.innerHTML = ''
      activeView($listView)
    }
  })
  var $addToCart = b('button', n, {'class': 'btn btn-warning add-cart'}, 'ADD TO CART')
  $rating.insertAdjacentElement('afterend', $addToCart)
  $addToCart.addEventListener('click', function(event) {
    if (event.target = true) {
      cart.push(selectedItem.id)
      itemcount = itemCount += 1
      $itemCount.textContent = itemCount

    }
  })
}

function renderImageView(image) {
  var $row = b('div', $imageView, {'class': 'row'})
  var $column = b('div', $row, {'class': 'col-xs-12'})
  var $image = b('img', $column, {'src': image})
  $image.addEventListener('click', function(event) {
    if (event.target = true) {
      activeView($detailsView)
      $imageView.innerHTML = ''
    }
  })
}

function updateCart() {

}

$itemCount = document.querySelector('#item-count')
var itemCount = 0
var selectedItem
var n = undefined
var b = buildElement
renderListView()
