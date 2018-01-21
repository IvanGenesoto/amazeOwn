module.exports = function customizeButton(buttonId) {
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
