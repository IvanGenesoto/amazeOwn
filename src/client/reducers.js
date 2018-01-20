module.exports = {
  appendAll(state, group) {
    Object.entries(group).reduce(append, state)
    function append(state, [methodName, method]) {
      state[methodName] = method
      return state
    }
    return state
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
