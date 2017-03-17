/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-undef-init */
/* eslint-disable no-cond-assign */
/* eslint-disable no-constant-condition */

var items = [
  {
    id: 9823741,
    name: 'D-FantiX Cyclone Boys 3x3 Speed Cube Stickerless Magic Cube 3x3x3 Puzzles Toys (56mm)',
    description: 'D-FantiX Cyclone Boys 3x3 Speed Cube is an outstanding cube with great overall performance. It strikes a good balance between affordability and performance. Suitable for beginner and professional player. The 3x3 cube has an endless amount of ways to solve it. Depending on whether you figure it out yourself or get help from tutorials.',
    price: 7.99,
    rating: 4.5,
    image: 'https://images-na.ssl-images-amazon.com/images/I/61GW03zyu2L._SL1000_.jpg',
    image2: 'https://images-na.ssl-images-amazon.com/images/I/71NNRvbcJ9L._SL1200_.jpg',
    image3: 'https://images-na.ssl-images-amazon.com/images/I/51YTbe98liL._SL1000_.jpg'
  },
  {
    id: 8726192,
    name: 'Fire Kids Edition Tablet, 7" Display, 16 GB, Blue Kid-Proof Case',
    description: 'Fire Kids Edition starts in Amazon FreeTime, which is built from the ground up just for kids. The background color and fonts change to a kid-friendly design, kids only see the titles that they have access to see, the home screen carousel shows their recently viewed titles, and they can even navigate visually to content based on characters or topics—for example "Elmo," "Dinosaurs," or "Puppies.”',
    price: 99.99,
    rating: 4,
    image: 'https://images-na.ssl-images-amazon.com/images/I/61QA%2BrcoPbL._SL1000_.jpg',
    image2: 'https://images-na.ssl-images-amazon.com/images/I/61DUI7jlQHL._SL1000_.jpg',
    image3: 'https://images-na.ssl-images-amazon.com/images/I/71ePnCmB%2BkL._SL1000_.jpg'
  },
  {
    id: 4127349,
    name: 'Generic VHEM Fidget Cube Relieves Stress & Anxiety Attention Toy',
    description: 'For all those of you out there with problems clicking, rolling, spinning and fidgeting during meetings, there\'s fidget cube: the desk toy that helps you focus. If you\'re a chronic fidgeted then the fidget cube is the gadget for you. It\'s specifically designed for people who can\'t keep their fingers still and whether you¡¯re a clicker, a flicker, a roller or a spinner, the cube has something to satisfy every type of fidgeted. An unusually addicting, high-quality desk toy designed to help you focus. Fidget at work, in class and at home in style. ',
    price: 2.03,
    rating: 3,
    image: 'https://images-na.ssl-images-amazon.com/images/I/61rwgeW8ZqL._SL1200_.jpg',
    image2: 'https://images-na.ssl-images-amazon.com/images/I/61rjitxG1SL._SL1200_.jpg',
    image3: 'https://images-na.ssl-images-amazon.com/images/I/61fTUg-HgUL._SL1200_.jpg'
  },
  {
    id: 2164276,
    name: 'SPINTECH - Omega Tri-Spinner Fidget Toy With Premium Hybrid Ceramic Bearing',
    description: 'This performance spinner is injection molded from ABS plastic. This results in a better finish, higher strength, and much higher shatter resistance when compared to more common 3D printed spinners. The high performance ZrO2 hybrid ceramic bearing in the center allows for up to 3 minute spins, and glides effortlessly in your hands. The 3 additional bearings around the sides have been choses for their slightly higher weight, which gives the spinner additional inertia for long spins, and each side bearing also provides great off-center fidgeting fun.',
    price: 1.50,
    rating: 4,
    image: 'https://images-na.ssl-images-amazon.com/images/I/71M0gwhIlUL._SL1500_.jpg',
    image2: 'https://images-na.ssl-images-amazon.com/images/I/81yw-NJIYLL._SL1500_.jpg',
    image3: 'https://images-na.ssl-images-amazon.com/images/I/71ARG9-Mo6L._SL1500_.jpg'
  },
  {
    id: 1723643,
    name: 'Fat Brain Toys Squigz Deluxe Set',
    description: 'Squigz are fun little suckers! Apply pressure to two Squigz. Air rushes out and the fun rushes in! Connecting to each other and to any solid, non-porous surface - Squigz are a species all their own. They flex. They stick. They suck people into creativity. Once they take hold, it takes some pull to separate them. When Squigz POP! in protest - you\'ll have to admit. your hands and ears are shamelessly delighted! They are flexible fellows and committed joiners. Squigz and fellow Squigz have one chief enterprise - creating things. Willingly, they assemble to become rockets, vehicles, a cushion for the cat, jewelry. they thrill in uniting as a ginormous octopus or squid. Squigz are scientific sorts - always up for playful experimentation and defying gravity - sticking to bathtubs, windows, school lockers, tabletops, and office desktops. (And they are mannerly guests too - never leaving a trace of their presence.) Playful curiosity. It\'s a whole new gig, thanks to Squigz.',
    price: 49.95,
    rating: 4.5,
    image: 'https://images-na.ssl-images-amazon.com/images/I/71p56XR7kPL._SL1200_.jpg',
    image2: 'https://images-na.ssl-images-amazon.com/images/I/81okr%2BOTR1L._SL1500_.jpg',
    image3: 'https://images-na.ssl-images-amazon.com/images/I/41PSKjURHgL.jpg'
  },
  {
    id: 7891652,
    name: 'Space Scooter Ride On, White',
    description: 'Discover a new way to move! The Space Scooter award winning design means that you and your family can experience a fun and unique way to travel. Reconnect with the outdoors on a foldable scooter which is faster than a traditional kick scooter and more compact and convenient than a bike!',
    price: 149.95,
    rating: 4,
    image: 'https://images-na.ssl-images-amazon.com/images/I/81A9LcHa9qL._SL1500_.jpg',
    image2: 'https://images-na.ssl-images-amazon.com/images/I/81b3delkSpL._SL1500_.jpg',
    image3: 'https://images-na.ssl-images-amazon.com/images/I/81c38ZHgzTL._SL1500_.jpg'
  }
]

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

var selectedItem
var n = undefined
var b = buildElement
renderListView()
