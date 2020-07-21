(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function addToCart(id) {

  const state = this
  const {cart} = state
  const item = cart.find(({id: id_}) => id_ === id)
  const $itemCount = document.getElementById('item-count')

  item && ++item.quantity
  item || cart.push({id, quantity: 1})
  state.saveCart()
  $itemCount.textContent = state.getItemCount()
  state.twirl()
}

},{}],2:[function(require,module,exports){
module.exports = function alterHistory(view, parameter = '', shouldReplace, argument) {

  const state = this
  const {shouldAlterHistory} = state
  const {origin} = location
  const {title} = document
  const title_ = title + ' ' + view
  const replacingViews = ['confirm', 'confirmation']
  const shouldReplace_ = shouldReplace || replacingViews.includes(view)
  const historyMethod = shouldReplace_ ? 'replaceState' : 'pushState'
  const shouldAlterHistory_ = shouldAlterHistory || shouldReplace_
  const historyState = {view, parameter}
  const beginning = view === 'featured' ? origin : '?v=' + view
  const ending = parameter ? '&p=' + parameter : ''
  const url = beginning + ending

  state.shouldAlterHistory = true
  shouldAlterHistory_ && history[historyMethod](historyState, title_, url)
  state.renderView(view, argument)
}

},{}],3:[function(require,module,exports){
module.exports = function createStorage() {

  const getIsSupported = () => {
    try {
      const testKey = '9F076EDF'
      localStorage.setItem(testKey, testKey)
      localStorage.removeItem(testKey)
      return true
    }
    catch (unused) { }
  }

  const clear = () => isSupported
    ? storage.clear()
    : storage = {}

  const getItem = name => isSupported
    ? getJsonItem(name)
    : getNullIfUndefined(storage[name])

  const getJsonItem = name => {
    const item = storage.getItem(name)
    try {
      return JSON.parse(item)
    }
    catch (unused) { }
  }

  const getNullIfUndefined = value => value === undefined
    ? null
    : value

  const key = index => isSupported
    ? storage.key(index)
    : Object.keys(storage)[index] || null

  const removeItem = name => isSupported
    ? storage.removeItem(name)
    : delete storage[name]

  const setItem = (name, value) => isSupported
    ? storage.setItem(name, JSON.stringify(value))
    : storage[name] = JSON.stringify(value)

  const getLength = () => isSupported
    ? storage.length
    : Object.keys(storage).length

  const isSupported = getIsSupported()

  let storage = isSupported ? localStorage : {}

  return {
    clear,
    getItem,
    key,
    removeItem,
    setItem,
    get length() {
      return getLength()
    }
  }
}

},{}],4:[function(require,module,exports){
module.exports = function fetchData(view, parameter = '', shouldReplace) {

  const state = this
  const {cart, alterHistory} = state
  const isCart = view === 'cart'
  const pathName = isCart ? 'item' : view
  const parameters = isCart ? cart.map(item => item.id) : [parameter]
  const callFetch = parameter => fetch(`/${pathName}/${parameter}`)
  const parse = response => response.json()

  Promise
    .all(parameters.map(callFetch))
    .then(responses => Promise.all(responses.map(parse)))
    .then(alterHistory.bind(state, view, parameter, shouldReplace))
}

},{}],5:[function(require,module,exports){
module.exports = function getItemCount() {

  const {cart} = this

  const increment = (count, item) => {
    const {quantity} = item
    return count + quantity
  }

  return cart.reduce(increment, 0)
}

},{}],6:[function(require,module,exports){
module.exports = function getStars(rating) {

  return 'images/stars/' + rating + '.png'
}

},{}],7:[function(require,module,exports){
module.exports = {
  addToCart: require('./add-to-cart'),
  alterHistory: require('./alter-history'),
  createStorage: require('./create-storage'),
  fetchData: require('./fetch-data'),
  getItemCount: require('./get-item-count'),
  getStars: require('./get-stars'),
  initiate: require('./initiate'),
  preloadFrame: require('./preload-frame'),
  removePromo: require('./remove-promo'),
  saveCart: require('./save-cart'),
  setTotalString: require('./set-total-string'),
  twirl: require('./twirl'),
  updateQuantity: require('./update-quantity')
}

},{"./add-to-cart":1,"./alter-history":2,"./create-storage":3,"./fetch-data":4,"./get-item-count":5,"./get-stars":6,"./initiate":8,"./preload-frame":9,"./remove-promo":10,"./save-cart":11,"./set-total-string":12,"./twirl":13,"./update-quantity":14}],8:[function(require,module,exports){
module.exports = function initiate() {

  const state = this
  const url = new URL(location)
  const parameters = url.searchParams
  const view = parameters.get('v')
  const parameter = parameters.get('p')
  const cartViews = ['cart', 'checkout', 'confirm', 'confirmation']
  const otherViews = ['item', 'search']
  const shouldFetchCart = cartViews.includes(view)
  const isOther = otherViews.includes(view)

  if (shouldFetchCart) return state.fetchData('cart', undefined, true)
  if (isOther) return state.fetchData(view, parameter)

  state.fetchData('featured')

}

},{}],9:[function(require,module,exports){
module.exports = function preloadFrame(index = 0) {

  const state = this
  const {renderElement: r, frames = []} = state
  const src = 'images/bang/' + index + '.png'
  const id = 'frame-' + index

  const attributeByName = {
    src,
    id,
    class: 'bang',
    'data-target': '.bs-example-modal-sm',
    'data-toggle': 'modal'
  }

  const $bang = r('img', attributeByName)

  state.frames = frames
  frames.push($bang)
  ++index
  index < 6 && state.preloadFrame(index)
}

},{}],10:[function(require,module,exports){
module.exports = function removePromo() {

  const state = this

  if (!state.promoIsUp) return

  const $promo = document.getElementById('promo')

  $promo.remove()
  state.promoIsUp = false
}

},{}],11:[function(require,module,exports){
module.exports = function saveCart() {

  const {storage, cart} = this

  storage.setItem('cart', cart)
}

},{}],12:[function(require,module,exports){
module.exports = function setTotalString(totalString) {

  const state = this

  state.totalString = totalString
}

},{}],13:[function(require,module,exports){
module.exports = function twirl() {

  const state = this
  const {renderElement: r, isTwirling, frames} = state
  const $frame1 = document.getElementById('frame-1')
  const $logo = document.getElementById('logo')

  const attributeByName = {
    id: 'catch-me', 'data-target': '.bs-example-modal-sm', 'data-toggle': 'modal'
  }

  const $catchMe = r('span', attributeByName)

  const forward = index => {
    state.isTwirling = true
    ++index
    if (index > 5) return backward(index)
    changeFrame(index, forward)
  }

  const changeFrame = (index, direction) => {
    const $name = document.getElementById('name')
    const $bang = frames[index]
    $name.nextElementSibling.remove()
    $name.insertAdjacentElement('afterend', $bang)
    window.setTimeout(direction, 41.67, index)
  }

  const backward = index => {
    --index
    if (index > -1) return changeFrame(index, backward)
    const $catchMe = document.getElementById('catch-me')
    $catchMe.remove()
    const $name = document.getElementById('name')
    $name.nextElementSibling.remove()
    $name.insertAdjacentElement('afterend', $frame1)
    state.isTwirling = false
  }

  if (isTwirling) return

  $logo.append($catchMe)
  forward(0)
}

},{}],14:[function(require,module,exports){
module.exports = function updateQuantity(id, isPlus) {

  const state = this
  const {cart} = state
  const index = cart.findIndex(({id: id_}) => id_ === id)
  const item = cart[index]

  if (isPlus) ++item.quantity
  else if (item.quantity > 1) --item.quantity
  else cart.splice(index, 1)

  state.saveCart()
  state.shouldAlterHistory = false
  state.fetchData('cart')
}

},{}],15:[function(require,module,exports){
const doingGroup = require('./do')
const listeningGroup = require('./listen')
const renderingGroups = require('./render')
const reduce = require('./reduce')
const groups = [doingGroup, listeningGroup, ...renderingGroups]
const state = groups.reduce(reduce, {})
const storage = state.storage = state.createStorage()

state.cart = storage.getItem('cart') || []
state.preloadFrame()
Object.values(listeningGroup).forEach(listen => listen.call(state))
state.initiate()

},{"./do":7,"./listen":17,"./reduce":20,"./render":25}],16:[function(require,module,exports){
module.exports = function listenForClick() {

  const state = this
  const $app = document.getElementById('app')
  const {cart} = state

  const getIsFeatured = (id, classList) =>
    id === 'name' ||
    id === 'own' ||
    id === 'continue-shopping' ||
    classList.contains('bang')

  $app.addEventListener('click', event => {
    const {target: $target} = event
    const {classList, dataset} = $target
    const {id: dataId} = dataset
    const id = $target.getAttribute('id')
    const src = $target.getAttribute('src')
    const isPlus = classList.contains('plus')
    const isMinus = classList.contains('minus')
    const isThumbnail = classList.contains('thumbnail')
    if (id === 'catch-me') return state.renderPromo()
    if (id === 'cart-button' || id === 'item-count') state.fetchData('cart')
    if (getIsFeatured(id, classList)) return state.fetchData('featured')
    if (id === 'add-to-cart') return state.addToCart(dataId)
    if (isPlus || isMinus) return state.updateQuantity(dataId, isPlus)
    if (dataId) return state.fetchData('item', dataId)
    if (isThumbnail) {
      const $displayedImage = document.getElementById('display-image')
      return $displayedImage.setAttribute('src', src)
    }
    if (id === 'display-image') return state.renderImage(src)
    if (id === 'full-sized-image') {
      const $itemView = document.getElementById('item')
      const $imageView = document.getElementById('image')
      $imageView.remove()
      return $itemView.classList.remove('hidden')
    }
    if (id === 'checkout-button') return state.alterHistory('checkout')
    if (id !== 'confirm-button') return
    cart.length = 0
    state.saveCart()
    return state.alterHistory('confirmation')
  })
}

},{}],17:[function(require,module,exports){
module.exports = {
  listenForClick: require('./click'),
  listenForPopstate: require('./popstate'),
  listenForSubmit: require('./submit')
}

},{"./click":16,"./popstate":18,"./submit":19}],18:[function(require,module,exports){
module.exports = function listenForPopstate() {

  const state = this

  addEventListener('popstate', ({state: historyState}) => {
    const {view, parameter} = historyState || {}
    const fetchingViews = ['featured', 'item', 'search']
    const shouldFetchData = fetchingViews.includes(view)
    state.shouldAlterHistory = false
    if (shouldFetchData) return state.fetchData(view, parameter)
    if (view) return state.fetchData('cart', undefined, true)
    state.initiate()
  })
}

},{}],19:[function(require,module,exports){
module.exports = function listenForSubmit() {

  const state = this
  const $app = document.getElementById('app')

  $app.addEventListener('submit', event => {
    event.preventDefault()
    const {target: $target} = event
    const id = $target.getAttribute('id')
    const $searchInput = document.getElementById('search-input')
    const {value: query} = $searchInput
    const idByName = {
      email: 'form-email',
      name: 'form-name',
      billing: 'form-billing-address',
      shipping: 'form-shipping-address',
      phone: 'form-phone-number',
      credit: 'form-credit-card',
      expiration: 'form-expiration-date',
      ccv: 'form-ccv',
      promo: 'form-promo-code'
    }
    const appendValue = (valueByName, [name, id]) => {
      const $input = document.getElementById(id)
      const {value} = $input
      valueByName[name] = value
      return valueByName
    }
    if (id === 'search-form') return state.fetchData('search', query)
    const valueByName = Object.entries(idByName).reduce(appendValue, {})
    state.alterHistory('confirm', '', false, valueByName)
  })
}

},{}],20:[function(require,module,exports){
module.exports = function reduce(parent, group) {

  const append = (parent, [methodName, method]) => {
    parent[methodName] = method
    return parent
  }

  return Object.entries(group).reduce(append, parent)
}

},{}],21:[function(require,module,exports){
module.exports = {
  renderCartItem: require('./item'),
  renderCartTotal: require('./total'),
  renderCartView: require('./view')
}

},{"./item":22,"./total":23,"./view":24}],22:[function(require,module,exports){
module.exports = function renderCartItem(item, quantity) {

  const {renderElement: r} = this
  const price = item.price.toFixed(2)
  const $cartView = document.getElementById('cart')

  if (!quantity) return

  $cartView.append(
    r('div', {class: 'row'}, [
      r('div', {class: 'col-xs-2'}, [
        r('img', {src: item.image, class: 'clickable cart image', 'data-id': item.id})
      ]),
      r('div', {class: 'col-xs-7'}, [
        r('h3', {class: 'cart-name', 'data-id': item.id}, item.name)
      ]),
      r('div', {class: 'col-xs-1 cart price-column'}, [
        r('h3', {class: 'price'}, [
          r('span', null, '$'),
          price
        ])
      ]),
      r('div', {class: 'col-xs-1 quantity-column'}, [
        r('h3', {class: 'quantity'}, [
          quantity,
          r('span', null, 'x')
        ])
      ]),
      r('div', {class: 'col-xs-1 edit-quantity'}, [
        r('span', null, [
          r('h2', {class: 'clickable minus', 'data-id': item.id}, '-')
        ]),
        r('span', null, [
          r('h2', {class: 'clickable plus', 'data-id': item.id}, '+')
        ])
      ]),
      r('hr', {class: 'cart hr'})
    ])
  )

  return item
}

},{}],23:[function(require,module,exports){
module.exports = function renderCartTotal(totalString) {

  const state = this
  const {renderElement: r, cart} = state
  const [hasItem] = cart
  const $shopping = document.getElementById('shopping')

  const attributeByName = {
    class: 'btn btn-default own button cart',
    id: 'checkout-button'
  }

  hasItem || (attributeByName.disabled = true)
  $shopping.append(r('button', attributeByName, 'CHECKOUT'))

  $shopping.append(
    r('span', {id: 'cart-total'}, [
      'Total:',
      r('span', null, [
        '$',
        r('span', null, totalString)
      ])
    ])
  )
}

},{}],24:[function(require,module,exports){
module.exports = function renderCartView(items) {

  const state = this
  const {renderElement: r, cart, setTotalString} = state
  const $app = document.getElementById('app')
  const itemCount = state.getItemCount()
  const title = itemCount ? 'Shopping Cart' : 'Your cart is empty.'

  const add = (total, item, index) => {
    const {price} = item
    const {quantity} = cart[index] || {}
    return total + price * quantity
  }

  const total = items.reduce(add, 0)
  const totalString = total.toFixed(2)

  const callRenderCartItem = (item, index) => {
    const {quantity} = cart[index] || {}
    state.renderCartItem(item, quantity)
  }

  $app.append(
    r('div', {id: 'cart', class: 'container'}, [
      r('div', {class: 'row'}, [
        r('div', {class: 'col-xs-12', id: 'shopping-column'}, [
          r('h1', {id: 'shopping'}, title),
          r('hr', {id: 'shopping-line'})
        ])
      ])
    ])
  )

  setTotalString.call(state, totalString)
  items.forEach(callRenderCartItem)
  total && state.renderCartTotal(totalString)
}

},{}],25:[function(require,module,exports){
module.exports = [
  require('./cart'),
  require('./misc'),
  require('./views')
]

},{"./cart":21,"./misc":28,"./views":35}],26:[function(require,module,exports){
module.exports = function renderElement(tag, attributeByName, children) {

  const $element = document.createElement(tag)

  const append = ($element, $child) => {
    $element.append($child)
    return $element
  }

  attributeByName && Object
    .entries(attributeByName)
    .forEach(([key, value]) => $element.setAttribute(key, value))

  if (!children) return $element
  if (Array.isArray(children)) return children.reduce(append, $element)

  return append($element, children)
}

},{}],27:[function(require,module,exports){
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

},{}],28:[function(require,module,exports){
module.exports = {
  renderElement: require('./element'),
  renderImage: require('./image'),
  renderNav: require('./nav'),
  renderPromo: require('./promo'),
  renderView: require('./view')
}

},{"./element":26,"./image":27,"./nav":29,"./promo":30,"./view":31}],29:[function(require,module,exports){
module.exports = function renderNav() {

  const state = this
  const {renderElement: r} = state
  const itemCount = state.getItemCount()
  const $app = document.getElementById('app')

  $app.append(
    r('div', {id: 'nav'}, [
      r('span', {id: 'logo', class: 'clickable'}, [
        r('h1', {id: 'name'}, [
          'amaze',
          r('span', {id: 'own'}, 'own')
        ]),
        r('img', {src: 'images/bang/1.png', class: 'bang', id: 'frame-1'})
      ]),
      r('form', {id: 'search-form'}, [
        r('input', {id: 'search-input', type: 'search', class: 'form-control', placeholder: 'Search Amazeown'})
      ]),
      r('span', {id: 'cart-container', class: 'clickable'}, [
        r('img', {src: 'images/cart.png', alt: 'cart', id: 'cart-button'}),
        r('p', {id: 'item-count'}, itemCount)
      ])
    ])
  )
}

},{}],30:[function(require,module,exports){
module.exports = function renderPromo() {

  const state = this
  const {renderElement: r} = state
  const $nav = document.getElementById('nav')
  const promoText = 'You\'re quick! Use promo code CAUGHTME for 15% off.'

  const attributeByName = {
    id: 'promo',
    class: 'modal fade bs-example-modal-sm',
    tabindex: '-1',
    role: 'dialog',
    'aria-labelledby': 'mySmallModalLabel'
  }

  state.removePromo()
  state.promoIsUp = true

  $nav.prepend(
    r('div', attributeByName, [
      r('div', {class: 'modal-dialog modal-sm', role: 'document'}, [
        r('div', {class: 'modal-content text-center'}, promoText)
      ])
    ])
  )
}

},{}],31:[function(require,module,exports){
module.exports = function renderView(name, argument) {

  const state = this
  const $app = document.getElementById('app')

  const renderViewByName = {
    cart: state.renderCartView,
    checkout: state.renderCheckoutView,
    confirm: state.renderConfirmView,
    confirmation: state.renderConfirmationView,
    featured: state.renderListView,
    item: state.renderItemView,
    search: state.renderListView
  }

  const render = renderViewByName[name]

  $app.innerHTML = ''
  state.renderNav()
  render.call(state, argument)
}

},{}],32:[function(require,module,exports){
module.exports = function renderCheckoutView() {

  const {renderElement: r} = this
  const $app = document.getElementById('app')

  $app.append(
    r('div', {id: 'checkout', class: 'container'}, [
      r('div', {class: 'row'}, [
        r('div', {class: 'col-xs-3'}),
        r('div', {class: 'col-xs-6'}, [
          r('form', null, [
            r('div', {class: 'form-group'}, [
              r('label', {for: 'form-email'}, 'Email'),
              r('input', {type: 'email', class: 'form-control', id: 'form-email', placeholder: 'Email'})
            ]),
            r('div', {class: 'form-group'}, [
              r('label', {for: 'form-name'}, 'Name'),
              r('input', {type: 'text', class: 'form-control', id: 'form-name', placeholder: 'Name'})
            ]),
            r('div', {class: 'form-group'}, [
              r('label', {for: 'form-billing-address'}, 'Billing Address'),
              r('input', {type: 'text', class: 'form-control', id: 'form-billing-address', placeholder: 'Billing address'})
            ]),
            r('div', {class: 'form-group'}, [
              r('label', {for: 'form-shipping-address'}, 'Shipping Address'),
              r('input', {type: 'text', class: 'form-control', id: 'form-shipping-address', placeholder: 'Shipping address'})
            ]),
            r('div', {class: 'form-group'}, [
              r('label', {for: 'form-phone-number'}, 'Phone'),
              r('input', {type: 'text', class: 'form-control', id: 'form-phone-number', placeholder: 'Phone number'})
            ]),
            r('div', {class: 'form-group'}, [
              r('label', {for: 'form-credit-card'}, 'Credit Card'),
              r('input', {type: 'text', class: 'form-control', id: 'form-credit-card', placeholder: 'Credit card number'})
            ]),
            r('div', {class: 'form-group'}, [
              r('label', {for: 'form-expiration-date'}, 'Experation Date'),
              r('input', {type: 'date', class: 'form-control', id: 'form-expiration-date'})
            ]),
            r('div', {class: 'form-group'}, [
              r('label', {for: 'form-ccv'}, 'CCV'),
              r('input', {type: 'text', class: 'form-control', id: 'form-ccv', placeholder: 'CCV'})
            ]),
            r('div', {class: 'form-group'}, [
              r('label', {for: 'form-promo-code'}, 'Promo Code'),
              r('input', {type: 'text', class: 'form-control', id: 'form-promo-code', placeholder: 'Promo code'})
            ]),
            r('input', {type: 'checkbox'}),
            r('span', null, ' Send me exciting Amazeown emails!'),
            r('button', {type: 'submit', class: 'btn btn-default own button', id: 'submit-button'}, 'Submit')
          ])
        ])
      ])
    ])
  )
}

},{}],33:[function(require,module,exports){
module.exports = function renderConfirmView(valueByName) {

  const {renderElement: r, totalString} = this
  const $app = document.getElementById('app')

  $app.append(
    r('div', {id: 'confirm', class: 'container'}, [
      r('div', {class: 'row'}, [
        r('div', {class: 'col-xs-3'}),
        r('div', {class: 'col-xs-6'}, [
          r('div', {class: 'row'}, [
            r('div', {class: 'col-xs-12'}, [
              r('h2', null, 'Confirm Order')
            ])
          ]),
          r('div', {class: 'row'}, [
            r('div', {class: 'col-xs-12'}, [
              r('ul', {class: 'list-group'}, [
                r('li', {class: 'list-group-item'}, 'Email: ' + valueByName.email),
                r('li', {class: 'list-group-item'}, 'Name: ' + valueByName.name),
                r('li', {class: 'list-group-item'}, 'Billing Address: ' + valueByName.billing),
                r('li', {class: 'list-group-item'}, 'Shipping Address: ' + valueByName.shipping),
                r('li', {class: 'list-group-item'}, 'Phone: ' + valueByName.phone),
                r('li', {class: 'list-group-item'}, 'Credit Card: ' + valueByName.credit),
                r('li', {class: 'list-group-item'}, 'Expiration Date: ' + valueByName.expiration),
                r('li', {class: 'list-group-item'}, 'CCV: ' + valueByName.ccv),
                r('li', {class: 'list-group-item'}, 'Promo Code: ' + valueByName.promo)
              ])
            ])
          ]),
          r('div', {class: 'row'}, [
            r('div', {class: 'col-xs-12'}, [
              r('h3', {class: 'col-xs-12'}, 'Order Total: $' + totalString)
            ])
          ]),
          r('div', {class: 'row'}, [
            r('div', {class: 'col-xs-12'}, [
              r('button', {class: 'btn btn-default own button', id: 'confirm-button'}, 'COMPLETE ORDER')
            ])
          ])
        ])
      ])
    ])
  )
}

},{}],34:[function(require,module,exports){
module.exports = function renderConfirmationView() {

  const {renderElement: r} = this
  const number = Math.floor(Math.random() * (9999999 - 1000000)) + 1000000
  const $app = document.getElementById('app')

  $app.append(
    r('div', {id: 'confirmation', class: 'container'}, [
      r('div', {id: 'thank-you', class: 'jumbotron'}, [
        r('h2', {class: 'text-center'}, 'Thank you.'),
        r('h3', {id: 'order-completed', class: 'text-center'}, 'Your order has been completed.'),
        r('h5', {class: 'number'}, 'Your confirmation number is ' + number),
        r('button', {id: 'continue-shopping', class: 'btn btn-default own button text-center'}, 'CONTINUE SHOPPING')
      ])
    ])
  )
}

},{}],35:[function(require,module,exports){
module.exports = {
  renderCheckoutView: require('./checkout'),
  renderConfirmView: require('./confirm'),
  renderConfirmationView: require('./confirmation'),
  renderItemView: require('./item'),
  renderListView: require('./list')
}

},{"./checkout":32,"./confirm":33,"./confirmation":34,"./item":36,"./list":37}],36:[function(require,module,exports){
module.exports = function renderItemView([item]) {

  const {renderElement: r, getStars} = this
  const $app = document.getElementById('app')
  const price = item.price.toFixed(2)
  const stars = getStars(item.rating)

  $app.append(
    r('div', {id: 'item', class: 'container'}, [
      r('div', {class: 'row'}, [
        r('div', {class: 'col-xs-1'}, [
          r('div', {class: 'row'}, [
            r('div', {class: 'col-xs-12'}, [
              r('img', {class: 'clickable thumbnail image', src: item.image})
            ])
          ]),
          r('div', {class: 'row'}, [
            r('div', {class: 'col-xs-12'}, [
              r('img', {class: 'clickable thumbnail image', src: item.image2})
            ])
          ]),
          r('div', {class: 'row'}, [
            r('div', {class: 'col-xs-12'}, [
              r('img', {class: 'clickable thumbnail image', src: item.image3})
            ])
          ])
        ]),
        r('div', {class: 'col-xs-4'}, [
          r('img', {id: 'display-image', class: 'clickable', src: item.image})
        ]),
        r('div', {class: 'col-xs-7'}, [
          r('h2', null, item.name),
          r('img', {src: stars, class: 'rating'}),
          r('div', {class: 'row'}, [
            r('div', {class: 'col-xs-6 price-column'}, [
              r('h3', {class: 'dollar'}, '$'),
              r('h3', {class: 'price'}, price)
            ]),
            r('div', {class: 'col-xs-6'}, [
              r('button', {class: 'btn btn-default own button', id: 'add-to-cart', 'data-id': item.id}, 'ADD TO CART')
            ])
          ]),
          r('hr'),
          r('p', null, item.description)
        ])
      ])
    ])
  )
}

},{}],37:[function(require,module,exports){
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

},{}]},{},[15]);
