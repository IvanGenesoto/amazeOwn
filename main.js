/* global logoFrames cart items browsingHistory */

var $listView = document.querySelector('#list')
var $detailsView = document.querySelector('#details')
var $imageView = document.querySelector('#image')
var $cartView = document.querySelector('#cart')
var $checkoutView = document.querySelector('#checkout')
var $nav = document.querySelector('#nav')
var $logoFrame1 = document.querySelector('#logo-frame-1')

var views = [
  $listView,
  $detailsView,
  $imageView,
  $cartView,
  $checkoutView
]

var c = createElement
var twirling = false
var promoUp = false
var itemCount = 0
var currentView = $listView

function preloadLogoFrames(frame) {
  if (frame < 6) {
    frame += 1
    var logoFrameID = 'logo-frame-' + frame
    var logoFrame = 'logo-frame/' + frame + '.png'
    var $logoFrame = createElement('img', {'class': 'logoFrame', 'id': logoFrameID, 'src': logoFrame, 'data-target': '.bs-example-modal-sm', 'data-toggle': 'modal'})
    logoFrames.push($logoFrame)
    preloadLogoFrames(frame)
  }
}

function activateView($targetView) {
  views.forEach(function (view) {
    view.classList.add('hidden')
  })
  $targetView.classList.remove('hidden')
  currentView = $targetView
}

function getItem(id) {
  var match
  items.forEach(function(item) {
    if (item.id === +id) {
      match = item
    }
  })
  return match
}

function getStars(rating) {
  var stars = 'stars/' + rating + '.png'
  return stars
}

function addToCart(id) {
  var dupe = false
  cart.forEach(function(item) {
    if (item.id === id) {
      item.quantity += 1
      dupe = true
    }
  })
  if (!dupe) {
    var item = {'id': id, 'quantity': 1}
    cart.push(item)
  }
  itemCount += 1
  var $itemCount = document.querySelector('#item-count')
  $itemCount.textContent = itemCount
  twirl()
}

function twirl() {
  if (twirling === false) {
    var $catchMe = c('span', {'id': 'catch-me', 'data-target': '.bs-example-modal-sm', 'data-toggle': 'modal'})
    var $logo = document.querySelector('#logo')
    $logo.insertAdjacentElement('beforeend', $catchMe)
    forward(1)
  }
  function forward(frame) {
    twirling = true
    if (frame > 5) {
      backward(6)
    }
    else {
      frame += 1
      changeFrames(frame, forward, false)
    }
  }
  function changeFrames(frame, direction, reverse) {
    var $name = document.querySelector('#name')
    var arrayPosition = frame - 1
    var $logoFrame = logoFrames[arrayPosition]
    $name.nextElementSibling.remove()
    $name.insertAdjacentElement('afterend', $logoFrame)
    window.setTimeout(direction, 41.67, frame)
  }
  function backward(frame) {
    frame -= 1
    if (frame > 1) {
      changeFrames(frame, backward, true)
    }
    else {
      var $catchMe = document.querySelector('#catch-me')
      $catchMe.remove()
      var $name = document.querySelector('#name')
      $name.nextElementSibling.remove()
      $name.insertAdjacentElement('afterend', $logoFrame1)
      twirling = false
    }
  }
}

function renderPromo() {
  removePromo()
  var $nav = document.querySelector('#nav')
  var promoText = 'You\'re quick! Use promo code CAUGHTME for 15% off.'
  var $promo = c('div', {'class': 'modal fade bs-example-modal-sm', 'tabindex': '-1', 'role': 'dialog', 'aria-labelledby': 'mySmallModalLabel'}, [
    c('div', {'class': 'modal-dialog modal-sm', 'role': 'document'}, [
      c('div', {'class': 'modal-content'}, promoText)
    ])
  ])
  $nav.insertAdjacentElement('afterbegin', $promo)
  promoUp = true
}

function removePromo() {
  if (promoUp === true) {
    var $nav = document.querySelector('#nav')
    var $promo = document.querySelector('.modal')
    $nav.removeChild($promo)
    promoUp = false
  }
}

function createBackButton() {
  var $nav = document.querySelector('#nav')
  var $back = c('button', {'class': 'btn btn-default', 'id': 'back'}, 'BACK')
  $nav.appendChild($back)
  $back.addEventListener('click', function(event) {
    if (browsingHistory.length > 0) {
      var last = browsingHistory.length - 1
      var previous = browsingHistory[last]
      activateView(previous)
      browsingHistory.splice(last)
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
    addToCart(id)
  })
}

function updateQuantity(id, plusOrMinus) {
  cart.forEach(function(object) {
    if (object.id === id) {
      var $itemCount = document.querySelector('#item-count')
      if (plusOrMinus === 'plus') {
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
  })
}

function createElement(tag, attributes, children) {
  var $element = document.createElement(tag)
  if (attributes !== undefined) {
    for (var key in attributes) {
      $element.setAttribute(key, attributes[key])
    }
  }
  if (children !== undefined) {
    if (!Array.isArray(children)) {
      append(children)
    }
    else {
      children.forEach(function (child) {
        append(child)
      })
    }
  }
  return $element
  function append(child) {
    if (child instanceof Node) {
      $element.appendChild(child)
    }
    else {
      $element.appendChild(document.createTextNode(child))
    }
  }
}

function renderListView() {
  var $row
  var itemsInRow = 0
  items.forEach(function (item) {
    function buildRow() {
      $row = c('div', {'class': 'row'})
      $listView.appendChild($row)
      var $line = c('hr')
      $listView.appendChild($line)
    }
    function buildColumn() {
      var price = item.price.toFixed(2)
      var stars = getStars(item.rating)
      var $column = c('div', {'class': 'col-xs-4 item', 'data-id': item.id}, [
        c('img', {'class': 'list image', 'src': item.image, 'data-id': item.id}),
        c('h3', {'data-id': item.id}, item.name),
        c('h3', {'class': 'dollar', 'data-id': item.id}, '$'),
        c('h3', {'class': 'price', 'data-id': item.id}, price),
        c('img', {'src': stars, 'class': 'rating', 'data-id': item.id})
      ])
      $row.appendChild($column)
      itemsInRow += 1
    }
    if (itemsInRow === 0 || itemsInRow % 3 === 0) {
      buildRow()
    }
    buildColumn()
  })
}

function renderDetailsView(item) {
  var price = item.price.toFixed(2)
  var stars = getStars(item.rating)
  var $row = c('div', {'class': 'row'}, [
    c('div', {'class': 'col-xs-4'}, [
      c('img', {'class': 'details image', 'src': item.image, 'data-image': item.image})
    ]),
    c('div', {'class': 'col-xs-8 details'}, [
      c('h2', undefined, item.name),
      c('img', {'src': stars, 'class': 'rating'}),
      c('div', {'class': 'row'}, [
        c('div', {'class': 'col-xs-6 price-column'}, [
          c('h3', {'class': 'dollar'}, '$'),
          c('h3', {'class': 'price'}, price)
        ]),
        c('div', {'class': 'col-xs-6'}, [
          c('button', {'class': 'btn btn-default add-cart'}, 'ADD TO CART')
        ])
      ]),
      c('p', undefined, item.description),
      c('hr')
    ])
  ])
  $detailsView.appendChild($row)
  customizeAddToCartButton(item.id)
}

function renderImageView(image) {
  var $row = c('div', {'class': 'row'}, [
    c('div', {'class': 'col-xs-12'}, [
      c('img', {'src': image})
    ])
  ])
  $imageView.appendChild($row)
}

function renderCartView() {
  if (itemCount < 1) {
    var title = 'Your cart is empty.'
    var render = false
  }
  else {
    title = 'Shopping Cart'
    render = true
  }
  var $row = c('div', {'class': 'row'}, [
    c('div', {'class': 'col-xs-12'}, [
      c('h1', {'id': 'shopping'}, title),
      c('hr', {'id': 'shopping-line'})
    ])
  ])
  $cartView.appendChild($row)
  if (render === true) {
    renderCartItems()
  }
}

function renderCartItems() {
  cart.forEach(function(object) {
    if (object.quantity > 0) {
      var quantity = object.quantity
      var id = object.id
      var item = getItem(id)
      var price = item.price.toFixed(2)
      var $row = c('div', {'class': 'row'}, [
        c('div', {'class': 'col-xs-2'}, [
          c('img', {'src': item.image, 'class': 'cart image', 'data-id': item.id})
        ]),
        c('div', {'class': 'col-xs-7'}, [
          c('h3', {'class': 'cart-name', 'data-id': item.id}, item.name)
        ]),
        c('div', {'class': 'col-xs-1 cart price-column', 'data-id': item.id}, [
          c('h3', {'class': 'price'}, [
            c('span', undefined, '$'),
            price
          ])
        ]),
        c('div', {'class': 'col-xs-1 quantity-column'}, [
          c('h3', {'class': 'quantity'}, [
            quantity,
            c('span', undefined, 'x')
          ])
        ]),
        c('div', {'class': 'col-xs-1 edit-quantity'}, [
          c('span', undefined, [
            c('h2', {'class': 'minus', 'data-id': item.id}, '-')
          ]),
          c('span', undefined, [
            c('h2', {'class': 'plus', 'data-id': item.id}, '+')
          ])
        ]),
        c('hr', {'class': 'cart hr'})
      ])
      $cartView.appendChild($row)
    }
  })
}

function listen() {
  $nav.addEventListener('click', function (event) {
    if (event.target.parentElement.getAttribute('id') === 'cart-container') {
      browsingHistory.push(currentView)
      $cartView.innerHTML = ''
      renderCartView()
      activateView($cartView)
    }
  })
  $nav.addEventListener('click', function (event) {
    if (event.target.parentElement.getAttribute('id') === 'logo' || event.target.parentElement.getAttribute('id') === 'name') {
      browsingHistory.push(currentView)
      activateView($listView)
    }
  })
  $listView.addEventListener('click', function (event) {
    browsingHistory.push(currentView)
    var id = event.target.getAttribute('data-id')
    var item = getItem(id)
    $detailsView.innerHTML = ''
    renderDetailsView(item)
    activateView($detailsView)
  })
  $detailsView.addEventListener('click', function (event) {
    if (event.target.getAttribute('class') === 'details image') {
      browsingHistory.push(currentView)
      $imageView.innerHTML = ''
      var image = event.target.getAttribute('data-image')
      renderImageView(image)
      activateView($imageView)
    }
  })
  $imageView.addEventListener('click', function () {
    activateView($detailsView)
  })
  $cartView.addEventListener('click', function(event) {
    if (event.target.getAttribute('class') === 'cart-name' || event.target.getAttribute('class') === 'cart image') {
      browsingHistory.push(currentView)
      $detailsView.innerHTML = ''
      var id = event.target.getAttribute('data-id')
      var item = getItem(id)
      renderDetailsView(item)
      activateView($detailsView)
    }
  })
  $cartView.addEventListener('click', function(event) {
    var id = +event.target.getAttribute('data-id')
    var math = event.target.getAttribute('class')
    if (math === 'plus' || math === 'minus') {
      updateQuantity(id, math)
    }
  })
  $nav.addEventListener('click', function(event) {
    if (event.target.getAttribute('class') === 'ex' || event.target.getAttribute('id') === 'catch-me') {
      renderPromo()
    }
  })
}

preloadLogoFrames(0)
renderListView()
createBackButton()
listen()
