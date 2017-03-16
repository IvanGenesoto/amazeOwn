var items = [
  {
    name: 'Toy Boat',
    description: 'It floats.',
    price: 6.99,
    image: 'https://img.thrivemarket.com/store/full/7/9/793573680884-2.jpg',
  },
  {
    name: 'Toy Tree',
    description: 'Try to make it grow!* *It wont.',
    price: 4.99,
    image: 'https://s-media-cache-ak0.pinimg.com/236x/89/1f/93/891f938b71a4a0301c2458b8f9855527.jpg',
  },
  {
    name: 'Toy Bear',
    description: 'A bear that\'s a toy! \'Cause real bears hurt!',
    price: 8.99,
    image: 'http://www.toysrus.com/graphics/product_images/pTRU1-20603499enh-z6.jpg',
  },
]


function renderListView(list) {
  list.forEach(function (item) {
    function renderElements(tagName, attributes, children, content) {
      var $element = document.createElement(tagName)
      for (var key in attributes) {
        $element.setAttribute(key, attributes[key])
      }
      if (content !== undefined) {
        if (Array.isArray(content) === true) {
          content.forEach(function(content) {
            if (content === 'name') {
              var $h2 = document.createElement('h2')
              $h2.textContent = item.name
              $element.appendChild($h2)
            }
            if (content === 'description') {
              var $description = document.createTextNode(item.description)
              $element.appendChild($description)
            }
          })
        }
        else {
          if (content === 'image') {
            var $image = document.createElement('img')
            $image.setAttribute('src', item.image)
            $element.appendChild($image)
          }
          if (content === 'price') {
            $element.textContent = '$' + item.price
          }
        }
      }
      if (children !== undefined) {
        if (Array.isArray(children) === true) {
          children.forEach(function (child) {
            $element.appendChild(child)
          })
        }
        else {
          $element.appendChild(children)
        }
      }
      return $element
    }
    var $listView = document.querySelector('#listView')
    var r = renderElements
    var n = undefined
    var $text = r('div', {'class': 'col-xs-8'}, n, ['name', 'description'])
    var $price = r('div', {'class': 'col-xs-12'}, n, 'price')
    var $image = r('div', {'class': 'col-xs-12 image thumbnail'}, n, 'image')
    var $priceRow = r('div', {'class': 'row'}, $price)
    var $imageRow = r('div', {'class': 'row'}, $image)
    var $imagePriceColumn = r('div', {'class': 'col-xs-4'}, [$imageRow, $priceRow])
    var $imagePriceTextRow = r('div', {'class': 'row'}, [$imagePriceColumn, $text])
    var $slot = r('div', {'class': 'col-xs-12 slot'}, $imagePriceTextRow)
    var $slotRow = r('div', {'class': 'row'}, $slot)
    var $hr = document.createElement('hr')
    $slot.appendChild($hr)
    $listView.appendChild($slotRow)
  })
}

renderListView(items)
