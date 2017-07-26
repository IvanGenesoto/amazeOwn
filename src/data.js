/* eslint-disable no-unused-vars */

var logoFrames = []
var browsingHistory = []
var cart = []

var items = [
  {
    id: 9823741,
    name: 'D-FantiX Cyclone Boys 3x3 Speed Cube Stickerless Magic Cube 3x3x3 Puzzles Toys (56mm)',
    description: 'D-FantiX Cyclone Boys 3x3 Speed Cube is an outstanding cube with great overall performance. It strikes a good balance between affordability and performance. Suitable for beginner and professional player. The 3x3 cube has an endless amount of ways to solve it. Depending on whether you figure it out yourself or get help from tutorials.',
    price: 7.99,
    rating: 4.5,
    image: 'https://images-na.ssl-images-amazon.com/images/I/61GW03zyu2L._SL1000_.jpg',
    image2: 'https://images-na.ssl-images-amazon.com/images/I/71NNRvbcJ9L._SL1200_.jpg',
    image3: 'https://images-na.ssl-images-amazon.com/images/I/51YTbe98liL._SL1000_.jpg',
    image4: 'https://images-na.ssl-images-amazon.com/images/I/61bzyiw67ZL._SL1200_.jpg'
  },
  {
    id: 8726192,
    name: 'Fire Kids Edition Tablet, 7" Display, 16 GB, Blue Kid-Proof Case',
    description: 'Fire Kids Edition starts in Amazon FreeTime, which is built from the ground up just for kids. The background color and fonts change to a kid-friendly design, kids only see the titles that they have access to see, the home screen carousel shows their recently viewed titles, and they can even navigate visually to content based on characters or topics—for example "Elmo," "Dinosaurs," or "Puppies.”',
    price: 99.99,
    rating: 4,
    image: 'https://images-na.ssl-images-amazon.com/images/I/61QA%2BrcoPbL._SL1000_.jpg',
    image2: 'https://images-na.ssl-images-amazon.com/images/I/61DUI7jlQHL._SL1000_.jpg',
    image3: 'https://images-na.ssl-images-amazon.com/images/I/71ePnCmB%2BkL._SL1000_.jpg',
    image4: 'https://images-na.ssl-images-amazon.com/images/I/6178nGlWi%2BL._SL1000_.jpg'
  },
  {
    id: 4127349,
    name: 'Generic VHEM Fidget Cube Relieves Stress & Anxiety Attention Toy',
    description: 'For all those of you out there with problems clicking, rolling, spinning and fidgeting during meetings, there\'s fidget cube: the desk toy that helps you focus. If you\'re a chronic fidgeted then the fidget cube is the gadget for you. It\'s specifically designed for people who can\'t keep their fingers still and whether you¡¯re a clicker, a flicker, a roller or a spinner, the cube has something to satisfy every type of fidgeted. An unusually addicting, high-quality desk toy designed to help you focus. Fidget at work, in class and at home in style. ',
    price: 2.03,
    rating: 3,
    image: 'https://images-na.ssl-images-amazon.com/images/I/416kjFQQJOL.jpg',
    image2: 'https://images-na.ssl-images-amazon.com/images/I/61rwgeW8ZqL._SL1200_.jpg',
    image3: 'https://images-na.ssl-images-amazon.com/images/I/61fTUg-HgUL._SL1200_.jpg',
    image4: 'http://i.ebayimg.com/images/g/DncAAOSwcUBYS2gT/s-l300.jpg'
  },
  {
    id: 2164276,
    name: 'SPINTECH - Omega Tri-Spinner Fidget Toy With Premium Hybrid Ceramic Bearing',
    description: 'This performance spinner is injection molded from ABS plastic. This results in a better finish, higher strength, and much higher shatter resistance when compared to more common 3D printed spinners. The high performance ZrO2 hybrid ceramic bearing in the center allows for up to 3 minute spins, and glides effortlessly in your hands. The 3 additional bearings around the sides have been choses for their slightly higher weight, which gives the spinner additional inertia for long spins, and each side bearing also provides great off-center fidgeting fun.',
    price: 1.50,
    rating: 4,
    image: 'https://images-na.ssl-images-amazon.com/images/I/71M0gwhIlUL._SL1500_.jpg',
    image2: 'https://images-na.ssl-images-amazon.com/images/I/81yw-NJIYLL._SL1500_.jpg',
    image3: 'https://images-na.ssl-images-amazon.com/images/I/71ARG9-Mo6L._SL1500_.jpg',
    image4: 'http://coolgiftsforkidsstore.com/img/wowstar-tri-spinner-fidget-toy-edc-focus-toy-with-hybrid-ceramic-bearing-ultra-durable-non-3d-printed_243401_500.jpg'
  },
  {
    id: 1723643,
    name: 'Fat Brain Toys Squigz Deluxe Set',
    description: 'Squigz are fun little suckers! Apply pressure to two Squigz. Air rushes out and the fun rushes in! Connecting to each other and to any solid, non-porous surface - Squigz are a species all their own. They flex. They stick. They suck people into creativity. Once they take hold, it takes some pull to separate them. When Squigz POP! in protest - you\'ll have to admit. your hands and ears are shamelessly delighted! They are flexible fellows and committed joiners. Squigz and ' + 'fellow Squigz have one chief enterprise - creating things. Willingly, they assemble to become rockets, vehicles, a cushion for the cat, jewelry. they thrill in uniting as a ginormous octopus or squid. Squigz are scientific sorts - always up for playful experimentation and defying gravity - sticking to bathtubs, windows, school lockers, tabletops, and office desktops. (And they are mannerly guests too - never leaving a trace of their presence.) Playful curiosity. It\'s a whole new gig, ' +
    'thanks to Squigz.',
    price: 49.95,
    rating: 4.5,
    image: 'https://images-na.ssl-images-amazon.com/images/I/71p56XR7kPL._SL1200_.jpg',
    image2: 'https://images-na.ssl-images-amazon.com/images/I/81okr%2BOTR1L._SL1500_.jpg',
    image3: 'https://images-na.ssl-images-amazon.com/images/I/41PSKjURHgL.jpg',
    image4: 'https://images-na.ssl-images-amazon.com/images/I/5146HbSfyLL.jpg'
  },
  {
    id: 7891652,
    name: 'Space Scooter Ride On, White',
    description: 'Discover a new way to move! The Space Scooter award winning design means that you and your family can experience a fun and unique way to travel. Reconnect with the outdoors on a foldable scooter which is faster than a traditional kick scooter and more compact and convenient than a bike!',
    price: 149.95,
    rating: 4,
    image: 'https://images-na.ssl-images-amazon.com/images/I/81A9LcHa9qL._SL1500_.jpg',
    image2: 'https://images-na.ssl-images-amazon.com/images/I/81b3delkSpL._SL1500_.jpg',
    image3: 'https://images-na.ssl-images-amazon.com/images/I/81c38ZHgzTL._SL1500_.jpg',
    image4: 'https://images-na.ssl-images-amazon.com/images/I/81nOF2fKULL._SL1500_.jpg'
  },
  {
    id: 9283504,
    name: 'Cards Against Humanity',
    description: 'Cards Against Humanity is a party game for horrible people. Unlike most of the party games you\'ve played before, Cards Against Humanity is as despicable and awkward as you and your friends. The game is simple. Each round, one player asks a question from a Black Card, and everyone else answers with their funniest White Card.',
    price: 25.00,
    rating: 5,
    image: 'https://images-na.ssl-images-amazon.com/images/I/811zWwDM7kL._SL1500_.jpg',
    image2: 'https://images-na.ssl-images-amazon.com/images/I/81Djp0z0Z1L._SL1500_.jpg',
    image3: 'https://images-na.ssl-images-amazon.com/images/I/81z8pwsHMnL._SL1500_.jpg',
    image4: 'https://images-na.ssl-images-amazon.com/images/I/31%2B9ge9CbRL.jpg'
  },
  {
    id: 2093847,
    name: 'Play-Doh 10-Pack of Colors (Amazon Exclusive)',
    description: 'With 10 different colors of modeling compound to play with, this is a case of creative possibilities! It’s a rainbow assortment of compound colors that lets you create just about anything you can imagine. Press, smoosh, squish, roll, squeeze and shape – with Play-Doh modeling compound, the only limit is your imagination! Play-Doh and all related characters are trademarks of Hasbro.',
    price: 7.99,
    rating: 4,
    image: 'https://images-na.ssl-images-amazon.com/images/I/81DiLRLm2iL._SL1500_.jpg',
    image2: 'https://images-na.ssl-images-amazon.com/images/I/81vdraggATL._SL1500_.jpg',
    image3: 'https://images-na.ssl-images-amazon.com/images/I/31trsWpIIjL.jpg',
    image4: 'http://freebies2deals.com/wp-content/uploads/2013/11/freebies2deals-case-of-colors-deal.jpg'
  },
  {
    id: 5208932,
    name: 'Nerf N-Strike Elite Strongarm Blaster',
    description: 'Designed for quick draws and fast firing, the N-Strike Elite Strongarm blaster puts elite battle performance in the palm of your hand. When speed and mobility are essential, this is the ultimate blaster. The rotating barrel holds 6 darts and the Slam Fire slide lets you blast as fast as you can fire.',
    price: 12.99,
    rating: 4.5,
    image: 'https://images-na.ssl-images-amazon.com/images/I/71T63QicO8L._SL1500_.jpg',
    image2: 'https://images-na.ssl-images-amazon.com/images/I/81dVcADREQL._SL1500_.jpg',
    image3: 'https://images-na.ssl-images-amazon.com/images/I/71X4hX0audL._SL1500_.jpg',
    image4: 'https://images-na.ssl-images-amazon.com/images/I/31ikajN97ZL.jpg'
  },
  {
    id: 9692835,
    name: 'Crayola Color Bath Dropz 3.59 Ounce (60 Tablets)',
    description: 'The Crayola Bath product line brings the color, fun, creativity and imagination of the Crayola brand to bath time. Crayola Bath Dropz are fizzing water color tablets that turn ordinary bath water into colorful, fizzy water. This jar makes up to 45 baths! Mix and match the tints to create all the colors of the rainbow. Color assortment may vary.',
    price: 6.98,
    rating: 4.5,
    image: 'https://images-na.ssl-images-amazon.com/images/I/61BNnZU1iYL._SL1000_.jpg',
    image2: 'https://images-na.ssl-images-amazon.com/images/I/613rutzD-%2BL._SL1000_.jpg',
    image3: 'https://images-na.ssl-images-amazon.com/images/I/71sVXmC%2BjcL._SY355_.jpg',
    image4: 'https://i5.walmartimages.com/asr/c83d3809-4943-47bc-a4ce-c73c5c3a20c9_1.13ec29fb728a0b46417683abf15a3486.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF'
  },
  {
    id: 7980233,
    name: 'Hasbro Pie Face Game',
    description: 'The hilarious Pie Face game is filled with fun and suspense, and somebody\'s bound to get surprised! Players load the arm with whipped cream (not included) or the included sponge, then take turns sliding their heads through the mask and spinning the spinner. But, watch out! The game unit could go off at any time giving someone a face full of whipped cream! (Whipped cream not included.)',
    price: 14.49,
    rating: 4.5,
    image: 'https://images-na.ssl-images-amazon.com/images/I/61itu15rgzL.jpg',
    image2: 'https://images-na.ssl-images-amazon.com/images/I/81v7SO9xFdL._SL1500_.jpg',
    image3: 'https://images-na.ssl-images-amazon.com/images/I/81j0%2B7sbzXL._SL1500_.jpg',
    image4: 'https://images-na.ssl-images-amazon.com/images/I/71RLg4Mt%2BTL._SL1500_.jpg'
  },
  {
    id: 3948220,
    name: 'OK to Wake! Alarm Clock & Night-Light',
    description: 'At bedtime, a soothing yellow night-light comforts children as they fall asleep. In the morning, it glows green when it\'s OK for children to get out of bed! If children wake up before the green light comes on, they know to go back to sleep or quietly play in their room until \'green means go\'!',
    price: 23.99,
    rating: 4,
    image: 'https://images-na.ssl-images-amazon.com/images/I/711z4s%2BXsuL._SL1500_.jpg',
    image2: 'https://images-na.ssl-images-amazon.com/images/I/81pJ3mONyNL._SL1500_.jpg',
    image3: 'https://images-na.ssl-images-amazon.com/images/I/61J%2BuCvD8iL._SL1000_.jpg',
    image4: 'https://images-na.ssl-images-amazon.com/images/I/31e1KCXlUPL.jpg'
  }
]
