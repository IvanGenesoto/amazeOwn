var items = [
  {
    name: 'Toy Boat',
    description: 'It floats.',
    price: 6.99,
    image: 'https://img.thrivemarket.com/store/full/7/9/793573680884-2.jpg',
  },
  {
    name: 'Toy Tree',
    description: 'Try to make it grow!*<p><br><p><br><p><br><p><br><p><br><p><br>*It wont.',
    price: 8.99,
    image: 'https://s-media-cache-ak0.pinimg.com/236x/89/1f/93/891f938b71a4a0301c2458b8f9855527.jpg',
  },
  {
    name: 'Toy Marmalade',
    description: 'Fan favorite!',
    price: 8.99,
    image: 'http://i.dailymail.co.uk/i/pix/2011/01/30/article-0-0CE189DB000005DC-8_233x400.jpg',
  },
]

function buildItemsList(itemArray) {
  itemArray.forEach(function (item) {

    var $container = document.querySelector('.container')

    var $slotRow = document.createElement('div')
    var $slotCol = document.createElement('div')
    var $imagePriceTextRow = document.createElement('div')
    var $imagePriceCol = document.createElement('div')
    var $imageRow = document.createElement('div')
    var $imageCol = document.createElement('div')
    var $priceRow = document.createElement('div')
    var $priceCol = document.createElement('div')
    var $textRow = document.createElement('div')
    var $textCol = document.createElement('div')
    var $hr = document.createElement('div')

    $slotRow.classList.add('row')
    $slotCol.classList.add('col-xs-12')
    $imagePriceTextRow.classList.add('row')
    $imagePriceCol.classList.add('col-xs-4')
    $imageRow.classList.add('row')
    $imageCol.classList.add('col-xs-12')
    $imageCol.classList.add('image')
    $imageCol.classList.add('thumbnail')
    $priceRow.classList.add('row')
    $priceCol.classList.add('col-xs-12')
    $textRow.classList.add('row')
    $textCol.classList.add('col-xs-8')

    $container.appendChild($slotRow)
    $slotRow.appendChild($slotCol)
    $slotCol.appendChild($imagePriceTextRow)
    $imagePriceTextRow.appendChild($imagePriceCol)
    $imagePriceCol.appendChild($imageRow)
    $imageRow.appendChild($imageCol)
    $imagePriceCol.appendChild($priceRow)
    $priceRow.appendChild($priceCol)
    $imagePriceTextRow.appendChild($textCol)
    $slotCol.appendChild($hr)

    $imageCol.innerHTML = '<img src="' + item.image + '" />'
    $priceCol.innerHTML = '<h4>$' + item.price
    $textCol.innerHTML = '<h2>' + item.name + '</h2><p>' + item.description
    $hr.innerHTML = '<hr>'
 })
}

buildItemsList(items)
