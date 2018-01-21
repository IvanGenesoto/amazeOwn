module.exports = {
  append(parent, [methodName, method]) {
    parent[methodName] = method
    return parent
  },
  appendAll(append, parent, group) {
    Object.entries(group).reduce(append, parent)
    return parent
  },
  preventWrites(state, key) {
    Object.defineProperty(state, key, {writable: false})
    return state
  },
  preventConfiguration(state, key) {
    Object.defineProperty(state, key, {configurable: false})
    return state
  }
}
