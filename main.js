var items = [
  {
    name: 'D-FantiX Cyclone Boys 3x3 Speed Cube Stickerless Magic Cube 3x3x3 Puzzles Toys (56mm)',
    description: 'D-FantiX Cyclone Boys 3x3 Speed Cube is an outstanding cube with great overall performance. It strikes a good balance between affordability and performance. Suitable for beginner and professional player. The 3x3 cube has an endless amount of ways to solve it. Depending on whether you figure it out yourself or get help from tutorials.',
    price: 7.99,
    rating: 4.5,
    image: 'https://images-na.ssl-images-amazon.com/images/I/61GW03zyu2L._SL1000_.jpg',
    image2: 'https://images-na.ssl-images-amazon.com/images/I/71NNRvbcJ9L._SL1200_.jpg',
    image3: 'https://images-na.ssl-images-amazon.com/images/I/51YTbe98liL._SL1000_.jpg'
  },
  {
    name: 'Fire Kids Edition Tablet, 7" Display, 16 GB, Blue Kid-Proof Case',
    description: 'Fire Kids Edition starts in Amazon FreeTime, which is built from the ground up just for kids. The background color and fonts change to a kid-friendly design, kids only see the titles that they have access to see, the home screen carousel shows their recently viewed titles, and they can even navigate visually to content based on characters or topics—for example "Elmo," "Dinosaurs," or "Puppies.”',
    price: 99.99,
    rating: 4,
    image: 'https://images-na.ssl-images-amazon.com/images/I/61QA%2BrcoPbL._SL1000_.jpg',
    image2: 'https://images-na.ssl-images-amazon.com/images/I/61DUI7jlQHL._SL1000_.jpg',
    image3: 'https://images-na.ssl-images-amazon.com/images/I/71ePnCmB%2BkL._SL1000_.jpg'
  },
  {
    name: 'Generic VHEM Fidget Cube Relieves Stress & Anxiety Attention Toy',
    description: 'For all those of you out there with problems clicking, rolling, spinning and fidgeting during meetings, there\'s fidget cube: the desk toy that helps you focus. If you\'re a chronic fidgeted then the fidget cube is the gadget for you. It¡¯s specifically designed for people who can\'t keep their fingers still and whether you¡¯re a clicker, a flicker, a roller or a spinner, the cube has something to satisfy every type of fidgeted. An unusually addicting, high-quality desk toy designed to help you focus. Fidget at work, in class and at home in style.',
    price: 2.03,
    rating: 3,
    image: 'https://images-na.ssl-images-amazon.com/images/I/61rwgeW8ZqL._SL1200_.jpg',
    image2: 'https://images-na.ssl-images-amazon.com/images/I/61rjitxG1SL._SL1200_.jpg',
    image3: 'https://images-na.ssl-images-amazon.com/images/I/61fTUg-HgUL._SL1200_.jpg'
  },
  {
    name: 'SPINTECH - Omega Tri-Spinner Fidget Toy With Premium Hybrid Ceramic Bearing',
    description: 'This performance spinner is injection molded from ABS plastic. This results in a better finish, higher strength, and much higher shatter resistance when compared to more common 3D printed spinners. The high performance ZrO2 hybrid ceramic bearing in the center allows for up to 3 minute spins, and glides effortlessly in your hands. The 3 additional bearings around the sides have been choses for their slightly higher weight, which gives the spinner additional inertia for long spins, and each side bearing also provides great off-center fidgeting fun.',
    price: 1.50,
    rating: 4,
    image: 'https://images-na.ssl-images-amazon.com/images/I/71M0gwhIlUL._SL1500_.jpg',
    image2: 'https://images-na.ssl-images-amazon.com/images/I/81yw-NJIYLL._SL1500_.jpg',
    image3: 'https://images-na.ssl-images-amazon.com/images/I/71ARG9-Mo6L._SL1500_.jpg'
  },
  {
    name: 'Fat Brain Toys Squigz Deluxe Set',
    description: 'Squigz are fun little suckers! Apply pressure to two Squigz. Air rushes out and the fun rushes in! Connecting to each other and to any solid, non-porous surface - Squigz are a species all their own. They flex. They stick. They suck people into creativity. Once they take hold, it takes some pull to separate them. When Squigz POP! in protest - you\'ll have to admit. your hands and ears are shamelessly delighted! They are flexible fellows and committed joiners. Squigz and fellow Squigz have one chief enterprise - creating things. Willingly, they assemble to become rockets, vehicles, a cushion for the cat, jewelry. they thrill in uniting as a ginormous octopus or squid. Squigz are scientific sorts - always up for playful experimentation and defying gravity - sticking to bathtubs, windows, school lockers, tabletops, and office desktops. (And they are mannerly guests too - never leaving a trace of their presence.) Playful curiosity. It\'s a whole new gig - thanks to Squigz.',
    price: 49.95,
    rating: 4.5,
    image: 'https://images-na.ssl-images-amazon.com/images/I/71p56XR7kPL._SL1200_.jpg',
    image2: 'https://images-na.ssl-images-amazon.com/images/I/81okr%2BOTR1L._SL1500_.jpg',
    image3: 'https://images-na.ssl-images-amazon.com/images/I/41PSKjURHgL.jpg'
  },
  {
  name: 'Space Scooter Ride On, White',
  description: 'Discover a new way to move! The Space Scooter award winning design means that you and your family can experience a fun and unique way to travel. Reconnect with the outdoors on a foldable scooter which is faster than a traditional kick scooter and more compact and convenient than a bike!',
  price: 149.95,
  rating: 4,
  image: 'https://images-na.ssl-images-amazon.com/images/I/81A9LcHa9qL._SL1500_.jpg',
  image2: 'https://images-na.ssl-images-amazon.com/images/I/81b3delkSpL._SL1500_.jpg',
  image3: 'https://images-na.ssl-images-amazon.com/images/I/81c38ZHgzTL._SL1500_.jpg'
  },
]

function renderListView(list) {
  list.forEach(function (item) {
    function buildRow() {
      $row = document.createElement('div')
      $row.classList.add('row')
      var $line = document.createElement('hr')
      $listView.appendChild($row)
      $listView.appendChild($line)
    }
    function getStars() {
      if (item.rating === 0) {
        stars = 'stars/0.png'
      }
      if (item.rating === 0.5) {
        stars = 'stars/0-5.png'
      }
      if (item.rating === 1) {
        stars = 'stars/1.png'
      }
      if (item.rating === 1.5) {
        stars = 'stars/1-5.png'
      }
      if (item.rating === 2) {
        stars = 'stars/2.png'
      }
      if (item.rating === 2.5) {
        stars = 'stars/2-5.png'
      }
      if (item.rating === 3) {
        stars = 'stars/3.png'
      }
      if (item.rating === 3.5) {
        stars = 'stars/3-5.png'
      }
      if (item.rating === 4) {
        stars = 'stars/4.png'
      }
      if (item.rating === 4.5) {
        stars = 'stars/4-5.png'
      }
      if (item.rating === 5) {
        stars = 'stars/5.png'
      }
    }
    function renderElements(tagName, attributes, children, content) {
      var $element = document.createElement(tagName)
      $element.classList.add('item')
      for (var key in attributes) {
        $element.setAttribute(key, attributes[key])
      }
      var $image = document.createElement('img')
      $image.setAttribute('src', item.image)
      $image.classList.add('image')
      $element.appendChild($image)
      var $name = document.createElement('h4')
      $name.textContent = item.name
      $element.insertAdjacentElement('beforeend', $name)
      var $price = document.createElement('h3')
      $price.classList.add('price')
      $price.textContent = '$' + item.price
      $element.insertAdjacentElement('beforeend', $price)
      var $rating = document.createElement('img')
      $rating.classList.add('rating')
      getStars()
      $rating.setAttribute('src', stars)
      $element.insertAdjacentElement('beforeend', $rating)
      itemsInRow += 1
      $row.appendChild($element)
    }
    if (itemsInRow === 0 || itemsInRow % 3 === 0) {
      buildRow()
    }
    renderElements('div', {'class': 'col-xs-4'})
  })
}

var $row
var $listView = document.querySelector('#listView')
var itemsInRow = 0
renderListView(items)
