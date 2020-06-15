module.exports = function reduce(parent, group) {
  return Object.entries(group).reduce(append, parent)
  function append(parent, [methodName, method]) {
    parent[methodName] = method
    return parent
  }
}
