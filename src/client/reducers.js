module.exports = {
  append(parent, [methodName, method]) {
    parent[methodName] = method
    return parent
  },
  appendAll(parent, group) {
    const {append} = this
    return Object.entries(group).reduce(append, parent)
  },
  preventWrites(state, key) {
    return Object.defineProperty(state, key, {writable: false})
  },
  preventConfiguration(state, key) {
    return Object.defineProperty(state, key, {configurable: false})
  }
}
