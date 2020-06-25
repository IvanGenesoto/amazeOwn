module.exports = function reduce(parent, group) {

  const append = (parent, [methodName, method]) => {
    parent[methodName] = method
    return parent
  }

  return Object.entries(group).reduce(append, parent)
}
