/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-undef-init */
/* eslint-disable no-cond-assign */
/* eslint-disable no-constant-condition */

function preloadExs(frame) {
  if (frame < 6) {
    frame += 1
    var exID = 'ex' + frame
    var ex = 'ex/' + frame + '.png'
    var $ex = b('img', n, {'id': exID, 'src': ex})
    makeClickable($ex, n, false, n, 'ex')
    exs.push($ex)
    preloadExs(frame)
  }
}

function activateView($targetView) {
  views.forEach(function (view) {
    view.classList.add('hidden')
  })
  $targetView.classList.remove('hidden')
  currentView = $targetView
}

function makeClickable($element, $targetView, rerender, imageOrID, argument) {
  $element.addEventListener('click', function(event) {
    if (event.target = true) {
      if (argument === 'plus' || argument === 'minus') {
        updateQuantity(imageOrID, argument)
      }
      else {
        browsingHistory.push(currentView)
        if (promoUp === true) {
          var $nav = document.querySelector('#nav')
          var $promo = document.querySelector('#promo')
          $nav.removeChild($promo)
          promoUp = false
        }
        if (rerender === true) {
          $targetView.innerHTML = ''
          if ($targetView === $listView) {
            renderListView()
          }
          if ($targetView === $detailsView) {
            renderDetailsView(imageOrID)
          }
          if ($targetView === $imageView) {
            renderImageView(imageOrID)
          }
          if ($targetView === $cartView) {
            renderCartView()
          }
        }
        if (argument === 'catchMe' || argument === 'ex') {
          renderPromo()
        }
        else {
          activateView($targetView)
        }
      }
    }
  })
}

function getItem(id) {
  var match
  items.forEach(function(item) {
    for (var property in item) {
      if (property === 'id') {
        if (item[property] === id) {
          match = item
        }
      }
    }
  })
  return match
}

function getStars(rating) {
  stars = 'stars/' + rating + '.png'
}

function addToCart(id) {
  dupe = false
  cart.forEach(function(item) {
    for (var property in item) {
      if (property === 'id') {
        if (item[property] === id) {
          item.quantity += 1
          dupe = true
        }
      }
    }
  })
  if (dupe === false) {
    var item = {'id': id, 'quantity': 1}
    cart.push(item)
  }
  itemCount += 1
  $itemCount.textContent = itemCount
  if (twirling === false) {
    var $cartContainer = document.querySelector('#cart-container')
    var $catchMe = b('span', $cartContainer, {'id': 'catch-me'}, n, 'beforebegin')
    makeClickable($catchMe, n, false, n, 'catchMe')
    forward(1)
  }
}

function forward(frame) {
  twirling = true
  if (frame > 5) {
    backward(6)
  }
  else {
    frame += 1
    twirl(frame, forward, false)
  }
}

function twirl(frame, direction, reverse) {
  var $name = document.querySelector('#name')
  var arrayPosition = frame - 1
  var $ex = exs[arrayPosition]
  $name.nextElementSibling.remove()
  $name.insertAdjacentElement('afterend', $ex)
  window.setTimeout(direction, 41.67, frame)
}

function backward(frame) {
  frame -= 1
  if (frame > 1) {
    twirl(frame, backward, true)
  }
  else {
    var $cartContainer = document.querySelector('#cart-container')
    $cartContainer.previousElementSibling.remove()
    $name.nextElementSibling.remove()
    $name.insertAdjacentElement('afterend', $ex1)
    twirling = false
  }
}

function renderPromo() {
  var $nav = document.querySelector('#nav')
  var promoText = 'You\'re quick! Use promo code CAUGHTME for 15% off.'
  var $promo = b('p', n, {'id': 'promo'}, promoText)
  $nav.insertAdjacentElement('afterbegin', $promo)
  promoUp = true
}

function buildBackButton() {
  var $nav = document.querySelector('#nav')
  var $back = b('button', $nav, {'class': 'btn btn-default', 'id': 'back'}, 'BACK')
  $back.addEventListener('click', function(event) {
    if (event.target = true) {
      if (browsingHistory.length > 0) {
        last = browsingHistory.length - 1
        var previous = browsingHistory[last]
        activateView(previous)
        browsingHistory.splice(last)
      }
    }
  })
}

function customizeAddToCartButton(id) {
  var $addToCart = document.querySelector('.add-cart')
  $addToCart.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = '#26c431'
    event.target.style.borderColor = '#208226'
    event.target.style.color = 'white'
  })
  $addToCart.addEventListener('mouseout', function(event) {
    event.target.style.backgroundColor = '#f0bc29'
    event.target.style.borderColor = '#96771E'
  })
  $addToCart.addEventListener('click', function(event) {
    if (event.target = true) {
      addToCart(id)
    }
  })
}

function updateQuantity(id, math) {
  cart.forEach(function(object) {
    for (var property in object) {
      if (property === 'id') {
        if (object[property] === id) {
          if (math === 'plus') {
            object.quantity += 1
            itemCount += 1
            $itemCount.textContent = itemCount
          }
          else {
            if (object.quantity > 0) {
              object.quantity -= 1
              itemCount -= 1
              $itemCount.textContent = itemCount
            }
          }
          $cartView.innerHTML = ''
          renderCartView()
        }
      }
    }
  })
}

function buildElement(tag, parent, attributes, text, position) {
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
    if (position === undefined) {
      parent.insertAdjacentElement('beforeend', $element)
    }
    else {
      parent.insertAdjacentElement(position, $element)
    }
  }
  return $element
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
      makeClickable($column, $detailsView, true, item.id)
      var $image = b('img', $column, {'class': 'list image', 'src': item.image})
      var $name = b('h3', $column, n, item.name)
      var $dollar = b('h3', $column, {'class': 'dollar'}, '$')
      var $price = b('h3', $column, {'class': 'price'})
      var price = item.price.toFixed(2)
      $price.textContent = price
      getStars(item.rating)
      var $rating = b('img', $column, {'src': stars, 'class': 'rating'})
      itemsInRow += 1
    }
    if (itemsInRow === 0 || itemsInRow % 3 === 0) {
      buildRow()
    }
    buildColumn()
  })
}

function renderDetailsView(id) {
  var item = getItem(id)
  var $row = b('div', $detailsView, {'class': 'row'})
  var $imageColumn = b('div', $row, {'class': 'col-xs-4'})
  var $detailsColumn = b('div', $row, {'class': 'col-xs-8 details'})
  $image = b('img', $imageColumn, {'class': 'details image', 'src': item.image})
  makeClickable($image, $imageView, true, item.image)
  $imageColumn.appendChild($image)
  b('h2', $detailsColumn, n, item.name)
  getStars(item.rating)
  var $rating = b('img', $detailsColumn, {'src': stars, 'class': 'rating'})
  var $priceRow = b('div', $detailsColumn, {'class': 'row'})
  var $priceColumn = b('div', $priceRow, {'class': 'col-xs-6 price-column'})
  var $dollar = b('h3', $priceColumn, {'class': 'dollar'}, '$')
  var price = item.price.toFixed(2)
  var $price = b('h3', $priceColumn, {'class': 'price'}, price)
  var $addColumn = b('div', $priceRow, {'class': 'col-xs-6'})
  var $addToCart = b('button', $addColumn, {'class': 'btn btn-default add-cart'}, 'ADD TO CART')
  customizeAddToCartButton(id)
  b('hr', $detailsColumn)
  b('p', $detailsColumn, n, item.description)
}

function renderImageView(image) {
  var $row = b('div', $imageView, {'class': 'row'})
  var $column = b('div', $row, {'class': 'col-xs-12'})
  var $image = b('img', $column, {'src': image})
  makeClickable($image, $detailsView, false)
}

function renderCartView() {
  var $row = b('div', $cartView, {'class': 'row'})
  var $column = b('div', $row, {'class': 'col-xs-12'})
  var $shopping = b('h1', $column, {'id': 'shopping'}, 'Shopping Cart')
  b('hr', $column, {'id': 'shopping-line'})
  if (itemCount < 1) {
    $shopping.textContent = 'Your cart is empty.'
  }
  else {
    renderCartItems()
  }
}

function renderCartItems() {
  cart.forEach(function(object) {
    for (var property in object) {
      if (property === 'quantity') {
        if (object[property] > 0) {
          var quantity = object[property]
          var render = true
        }
      }
      if (property === 'id') {
        var id = object[property]
      }
    }
    if (render === true) {
      var item = getItem(id)
      var $row = b('div', $cartView, {'class': 'row'})
      var $imageColumn = b('div', $row, {'class': 'col-xs-2'})
      var $image = b('img', $imageColumn, {'src': item.image, 'class': 'cart image'})
      makeClickable($image, $detailsView, true, item.id)
      var $nameColumn = b('div', $row, {'class': 'col-xs-7'})
      var $name = b('h3', $nameColumn, n, item.name)
      makeClickable($name, $detailsView, true, item.id)
      var $priceColumn = b('div', $row, {'class': 'col-xs-1 cart price-column'})
      var price = item.price.toFixed(2)
      var $price = b('h3', $priceColumn, {'class': 'price'}, price)
      b('span', $price, n, '$', 'afterbegin')
      var $quantityColumn = b('div', $row, {'class': 'col-xs-1 quantity-column'})
      var $quantity = b('h3', $quantityColumn, {'class': 'quantity'}, quantity)
      b('span', $quantity, n, 'x', 'afterbegin')
      b('hr', $row, {'class': 'cart hr'}, n, 'afterend')
      var $editQuantityColumn = b('div', $row, {'class': 'col-xs-1 edit-quantity'})
      var $minusSpan = b('span', $editQuantityColumn)
      var $minus = b('h2', $minusSpan, {'class': 'minus'}, '-')
      makeClickable($minus, n, false, id, 'minus')
      var $plusSpan = b('span', $editQuantityColumn)
      var $plus = b('h2', $plusSpan, {'class': 'plus'}, '+')
      makeClickable($plus, n, false, id, 'plus')
    }
  })
}

var views = [
  $listView = document.querySelector('#list'),
  $detailsView = document.querySelector('#details'),
  $imageView = document.querySelector('#image'),
  $cartView = document.querySelector('#cart'),
  $checkoutView = document.querySelector('#checkout')
]

var n = undefined
var b = buildElement
var twirling = false
var promoUp = false
var itemCount = 0
var currentView = $listView
var $cartButton = document.querySelector('#cart-button')
makeClickable($cartButton, $cartView, true)
var $itemCount = document.querySelector('#item-count')
makeClickable($itemCount, $cartView, true)
var $name = document.querySelector('#name')
makeClickable($name, $listView, false)
var $ex1 = document.querySelector('#ex1')
makeClickable($ex1, $listView, false)

preloadExs(0)
renderListView()
buildBackButton()
