module.exports = function createElement(tag, attributes, children) {
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
