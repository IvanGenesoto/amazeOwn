const $nav = document.querySelector('#nav')
const $featuredView = document.querySelector('#featured')
const $searchView = document.querySelector('#search')
const $detailsView = document.querySelector('#details')
const $imageView = document.querySelector('#image')
const $cartView = document.querySelector('#cart')
const $checkoutView = document.querySelector('#checkout')
const $confirmOrderView = document.querySelector('#confirm-order')
const $confirmationView = document.querySelector('#confirmation')
const $logoFrame1 = document.querySelector('#logo-frame-1')
const logoFrames = []
const browsingHistory = []
const cart = []

const views = [
  $featuredView,
  $searchView,
  $detailsView,
  $imageView,
  $cartView,
  $checkoutView,
  $confirmOrderView,
  $confirmationView
]

const c = createElement
let isTwirling = false
let promoIsUp = false
let itemCount = 0
let total = 0
let orderTotal = 0
let currentView = $featuredView

function preloadLogoFrames(frame) {
  if (frame < 6) {
    frame += 1
    const logoFrameId = 'logo-frame-' + frame
    const logoFrame = 'images/logo-frame/' + frame + '.png'
    const $logoFrame = c('img', {'class': 'logo-frame', 'id': logoFrameId, 'src': logoFrame, 'data-target': '.bs-example-modal-sm', 'data-toggle': 'modal'})
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

function getStars(rating) {
  const stars = 'images/stars/' + rating + '.png'
  return stars
}

function addToCart(id) {
  let isDuplicate = false
  cart.forEach(function(item) {
    if (item.id === id) {
      item.quantity += 1
      isDuplicate = true
    }
  })
  if (!isDuplicate) {
    const item = {'id': id, 'quantity': 1}
    cart.push(item)
  }
  itemCount += 1
  const $itemCount = document.querySelector('#item-count')
  $itemCount.textContent = itemCount
  twirl()
}

function twirl() {
  if (isTwirling === false) {
    const $catchMe = c('span', {'id': 'catch-me', 'data-target': '.bs-example-modal-sm', 'data-toggle': 'modal'})
    const $logo = document.querySelector('#logo')
    $logo.insertAdjacentElement('beforeend', $catchMe)
    forward(1)
  }
  function forward(frame) {
    isTwirling = true
    if (frame > 5) {
      backward(6)
    }
    else {
      frame += 1
      changeFrames(frame, forward)
    }
  }
  function changeFrames(frame, direction) {
    const $name = document.querySelector('#name')
    const arrayPosition = frame - 1
    const $logoFrame = logoFrames[arrayPosition]
    $name.nextElementSibling.remove()
    $name.insertAdjacentElement('afterend', $logoFrame)
    window.setTimeout(direction, 41.67, frame)
  }
  function backward(frame) {
    frame -= 1
    if (frame > 1) {
      changeFrames(frame, backward)
    }
    else {
      const $catchMe = document.querySelector('#catch-me')
      $catchMe.remove()
      const $name = document.querySelector('#name')
      $name.nextElementSibling.remove()
      $name.insertAdjacentElement('afterend', $logoFrame1)
      isTwirling = false
    }
  }
}

function renderPromo() {
  removePromo()
  const $nav = document.querySelector('#nav')
  const promoText = 'You\'re quick! Use promo code CAUGHTME for 15% off.'
  const $promo = c('div', {'class': 'modal fade bs-example-modal-sm', 'tabindex': '-1', 'role': 'dialog', 'aria-labelledby': 'mySmallModalLabel'}, [
    c('div', {'class': 'modal-dialog modal-sm', 'role': 'document'}, [
      c('div', {'class': 'modal-content text-center'}, promoText)
    ])
  ])
  $nav.insertAdjacentElement('afterbegin', $promo)
  promoIsUp = true
}

function removePromo() {
  if (promoIsUp === true) {
    const $nav = document.querySelector('#nav')
    const $promo = document.querySelector('.modal')
    $nav.removeChild($promo)
    promoIsUp = false
  }
}

function createBackButton() {
  const $nav = document.querySelector('#nav')
  const $back = c('button', {'class': 'btn btn-default', 'id': 'back'}, 'BACK')
  $nav.appendChild($back)
  $back.addEventListener('click', function(event) {
    if (browsingHistory.length > 0) {
      const last = browsingHistory.length - 1
      const previous = browsingHistory[last]
      activateView(previous)
      browsingHistory.splice(last)
    }
  })
}

function customizeButton(buttonId) {
  const $button = document.querySelector(buttonId)
  $button.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = '#26c431'
    event.target.style.borderColor = '#208226'
    event.target.style.color = 'white'
  })
  $button.addEventListener('mouseout', function(event) {
    event.target.style.backgroundColor = '#f0bc29'
    event.target.style.borderColor = '#96771E'
  })
}

function updateQuantity(id, plusOrMinus) {
  cart.forEach(function(object) {
    if (object.id === id) {
      const $itemCount = document.querySelector('#item-count')
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

function generateConfirmationNumber() {
  if (document.querySelector('.number')) {
    const $number = document.querySelector('.number')
    $number.remove()
  }
  const number = Math.floor(Math.random() * (9999999 - 1000000)) + 1000000
  const $orderPlaced = document.querySelector('#order-placed')
  const $confirmationNumber = c('h5', {'class': 'number'}, 'Your confirmation number is ' + number)
  $orderPlaced.appendChild($confirmationNumber)
  customizeButton('#continue-shopping')
}

function createElement(tag, attributes, children) {
  const $element = document.createElement(tag)
  if (attributes) Object
    .entries(attributes)
    .forEach(([key, value]) => $element.setAttribute(key, value))
  if (!children) return $element
  if (Array.isArray(children)) return children.reduce(append, $element)
  else return append($element, children)
  function append($element, child) {
    if (child instanceof Node) $element.appendChild(child)
    else $element.appendChild(document.createTextNode(child))
    return $element
  }
}

function goToSearchResults(string) {
  fetch('/search/' + string.toLowerCase())
    .then(parse)
    .then(renderSearchView)
    .then(activateView($searchView))
}

function goToDetails(id) {
  fetch('/items/' + id)
    .then(parse)
    .then(renderDetailsView)
    .then(activateView($detailsView))
}

function renderSearchView(results) {
  renderListView(results, $searchView)
}

function renderListView(list, view) {
  let $row
  let itemsInRow = 0
  if (!view) view = $featuredView
  list.forEach(function (item) {
    function buildRow() {
      $row = c('div', {'class': 'row'})
      view.appendChild($row)
      const $line = c('hr')
      view.appendChild($line)
    }
    function buildColumn() {
      const price = item.price.toFixed(2)
      const stars = getStars(item.rating)
      const $column = c('div', {'class': 'col-xs-4 item', 'data-id': item.id}, [
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
  const price = item.price.toFixed(2)
  const stars = getStars(item.rating)
  const $row = c('div', {'class': 'row'}, [
    c('div', {'class': 'col-xs-1'}, [
      c('div', {'class': 'row'}, [
        c('div', {'class': 'col-xs-12'}, [
          c('img', {'class': 'thumbnail image', 'src': item.image2})
        ])
      ]),
      c('div', {'class': 'row'}, [
        c('div', {'class': 'col-xs-12'}, [
          c('img', {'class': 'thumbnail image', 'src': item.image3})
        ]),
        c('div', {'class': 'row'}, [
          c('div', {'class': 'col-xs-12'}, [
            c('img', {'class': 'thumbnail image', 'src': item.image4})
          ])
        ])
      ])
    ]),
    c('div', {'class': 'col-xs-4'}, [
      c('img', {'class': 'details image', 'src': item.image})
    ]),
    c('div', {'class': 'col-xs-7 details'}, [
      c('h2', null, item.name),
      c('img', {'src': stars, 'class': 'rating'}),
      c('div', {'class': 'row'}, [
        c('div', {'class': 'col-xs-6 price-column'}, [
          c('h3', {'class': 'dollar'}, '$'),
          c('h3', {'class': 'price'}, price)
        ]),
        c('div', {'class': 'col-xs-6'}, [
          c('button', {'class': 'btn btn-default button', 'id': 'add-cart', 'data-id': item.id}, 'ADD TO CART')
        ])
      ]),
      c('hr'),
      c('p', null, item.description)
    ])
  ])
  $detailsView.appendChild($row)
  customizeButton('#add-cart')
}

function renderImageView(image) {
  const $row = c('div', {'class': 'row'}, [
    c('div', {'class': 'col-xs-12'}, [
      c('img', {'src': image})
    ])
  ])
  $imageView.appendChild($row)
}

function renderCartView() {
  if (itemCount < 1) {
    var title = 'Your cart is empty.'
    var shouldRender = false
  }
  else {
    title = 'Shopping Cart'
    shouldRender = true
  }
  const $row = c('div', {'class': 'row'}, [
    c('div', {'class': 'col-xs-12', 'id': 'shopping-column'}, [
      c('h1', {'id': 'shopping'}, title),
      c('hr', {'id': 'shopping-line'})
    ])
  ])
  $cartView.appendChild($row)
  if (shouldRender === true) {
    renderCartItems()
  }
}

function renderCartItems() {
  total = 0
  cart.forEach(function(item) {
    function quantify(cartItem) {
      cartItem.quantity = item.quantity
      return cartItem
    }
    fetch('/items/' + item.id)
      .then(parse)
      .then(quantify)
      .then(renderCartItem)
      .then(renderCartTotal)
  })
}

function renderCartItem(item) {
  if (item.quantity > 0) {
    const quantity = item.quantity
    const price = item.price.toFixed(2)
    const $row = c('div', {'class': 'row'}, [
      c('div', {'class': 'col-xs-2'}, [
        c('img', {'src': item.image, 'class': 'cart image', 'data-id': item.id})
      ]),
      c('div', {'class': 'col-xs-7'}, [
        c('h3', {'class': 'cart-name', 'data-id': item.id}, item.name)
      ]),
      c('div', {'class': 'col-xs-1 cart price-column', 'data-id': item.id}, [
        c('h3', {'class': 'price'}, [
          c('span', null, '$'),
          price
        ])
      ]),
      c('div', {'class': 'col-xs-1 quantity-column'}, [
        c('h3', {'class': 'quantity'}, [
          quantity,
          c('span', null, 'x')
        ])
      ]),
      c('div', {'class': 'col-xs-1 edit-quantity'}, [
        c('span', null, [
          c('h2', {'class': 'minus', 'data-id': item.id}, '-')
        ]),
        c('span', null, [
          c('h2', {'class': 'plus', 'data-id': item.id}, '+')
        ])
      ]),
      c('hr', {'class': 'cart hr'})
    ])
    $cartView.appendChild($row)
    return item
  }
}

function renderCartTotal(item) {
  total += item.price * item.quantity
  total = total.toFixed(2)
  const $shopping = document.querySelector('#shopping')
  const $checkoutButton = c('button', {'class': 'btn btn-default button cart', 'id': 'checkout-button', 'data-total': total}, 'CHECKOUT')
  $shopping.appendChild($checkoutButton)
  customizeButton('#checkout-button')
  const $cartTotal = c('span', null, [
    'Total:',
    c('span', null, [
      '$',
      c('span', null, total)
    ])
  ])
  $shopping.appendChild($cartTotal)
}

function renderConfirmOrder() {
  const $email = document.querySelector('#form-email')
  const $name = document.querySelector('#form-name')
  const $billing = document.querySelector('#form-billing-address')
  const $shipping = document.querySelector('#form-shipping-address')
  const $phone = document.querySelector('#form-phone-number')
  const $credit = document.querySelector('#form-credit-card')
  const $expiration = document.querySelector('#form-expiration-date')
  const $ccv = document.querySelector('#form-ccv')
  const $promo = document.querySelector('#form-promo-code')
  const $confirmOrder = c('div', {'class': 'row'}, [
    c('div', {'class': 'col-xs-6 offset-xs-3'}, [
      c('div', {'class': 'row'}, [
        c('div', {'class': 'col-xs-12'}, [
          c('h2', null, 'Confirm Order')
        ])
      ]),
      c('div', {'class': 'row'}, [
        c('div', {'class': 'col-xs-12'}, [
          c('ul', {'class': 'list-group'}, [
            c('li', {'class': 'list-group-item'}, 'Email: ' + $email.value),
            c('li', {'class': 'list-group-item'}, 'Name: ' + $name.value),
            c('li', {'class': 'list-group-item'}, 'Billing address: ' + $billing.value),
            c('li', {'class': 'list-group-item'}, 'Shipping address: ' + $shipping.value),
            c('li', {'class': 'list-group-item'}, 'Phone number: ' + $phone.value),
            c('li', {'class': 'list-group-item'}, 'Credit card number: ' + $credit.value),
            c('li', {'class': 'list-group-item'}, 'Expiration date: ' + $expiration.value),
            c('li', {'class': 'list-group-item'}, 'CCV: ' + $ccv.value),
            c('li', {'class': 'list-group-item'}, 'Promo code: ' + $promo.value)
          ])
        ])
      ]),
      c('div', {'class': 'row'}, [
        c('div', {'class': 'col-xs-12'}, [
          c('h3', {'class': 'col-xs-12'}, 'Order Total: $' + orderTotal)
        ])
      ]),
      c('div', {'class': 'row'}, [
        c('div', {'class': 'col-xs-12'}, [
          c('button', {'class': 'btn btn-default button', 'id': 'confirm-button'}, 'PLACE ORDER')
        ])
      ])
    ])
  ])
  $confirmOrderView.appendChild($confirmOrder)
  customizeButton('#confirm-button')
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
      if (isTwirling === false) {
        browsingHistory.push(currentView)
        activateView($featuredView)
      }
    }
  })
  $nav.addEventListener('submit', function (event) {
    event.preventDefault()
    browsingHistory.push(currentView)
    $searchView.innerHTML = ''
    const $searchForm = document.querySelector('#search-form')
    goToSearchResults($searchForm.value)
  })
  $featuredView.addEventListener('click', function (event) {
    browsingHistory.push(currentView)
    $detailsView.innerHTML = ''
    const id = event.target.getAttribute('data-id')
    if (id) goToDetails(id)
  })
  $searchView.addEventListener('click', function (event) {
    browsingHistory.push(currentView)
    $detailsView.innerHTML = ''
    const id = event.target.getAttribute('data-id')
    if (id) goToDetails(id)
  })
  $detailsView.addEventListener('click', function (event) {
    if (event.target.getAttribute('class') === 'details image') {
      $imageView.innerHTML = ''
      const image = event.target.getAttribute('src')
      renderImageView(image)
      activateView($imageView)
    }
  })
  $detailsView.addEventListener('click', function (event) {
    if (event.target.getAttribute('class') === 'thumbnail image') {
      const newImage = event.target.getAttribute('src')
      const $detailsImage = document.querySelector('.details')
      const currentImage = $detailsImage.getAttribute('src')
      $detailsImage.setAttribute('src', newImage)
      event.target.setAttribute('src', currentImage)
    }
  })
  $detailsView.addEventListener('click', function (event) {
    if (event.target.getAttribute('id') === 'add-cart') {
      const id = event.target.getAttribute('data-id')
      addToCart(id)
    }
  })
  $imageView.addEventListener('click', function () {
    activateView($detailsView)
  })
  $cartView.addEventListener('click', function (event) {
    if (event.target.getAttribute('class') === 'cart-name' || event.target.getAttribute('class') === 'cart image') {
      browsingHistory.push(currentView)
      $detailsView.innerHTML = ''
      const id = event.target.getAttribute('data-id')
      goToDetails(id)
    }
  })
  $cartView.addEventListener('click', function (event) {
    if (event.target.getAttribute('class') === 'plus' || event.target.getAttribute('class') === 'minus') {
      const id = event.target.getAttribute('data-id')
      const math = event.target.getAttribute('class')
      updateQuantity(id, math)
    }
  })
  $cartView.addEventListener('click', function (event) {
    if (event.target.getAttribute('id') === 'checkout-button') {
      browsingHistory.push(currentView)
      orderTotal = event.target.getAttribute('data-total')
      activateView($checkoutView)
    }
  })
  $nav.addEventListener('click', function (event) {
    if (event.target.getAttribute('class') === 'logo-frame' || event.target.getAttribute('id') === 'catch-me') {
      renderPromo()
    }
  })
  $checkoutView.addEventListener('submit', function (event) {
    event.preventDefault()
    browsingHistory.push(currentView)
    $confirmOrderView.innerHTML = ''
    renderConfirmOrder()
    activateView($confirmOrderView)
  })
  $confirmOrderView.addEventListener('click', function (event) {
    if (event.target.getAttribute('id') === 'confirm-button') {
      browsingHistory.push(currentView)
      generateConfirmationNumber()
      activateView($confirmationView)
    }
  })
  $confirmationView.addEventListener('click', function (event) {
    if (event.target.getAttribute('id') === 'continue-shopping') {
      browsingHistory.push(currentView)
      activateView($featuredView)
    }
  })
}

function parse(response) {
  return response.json()
}

preloadLogoFrames(0)
customizeButton('#submit-button')
fetch('/featured')
  .then(parse)
  .then(renderListView)
createBackButton()
listen()
