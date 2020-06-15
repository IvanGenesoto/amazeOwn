module.exports = function handleRequests(app, data) {
  app.get('/featured', (unused, response) => response.json(data))
  app.get('/item/:id', (request, response) => {
    const id = +request.params.id
    const item = data.find(item => item.id === id)
    response.json(item)
  })
  app.get('/search/:query', (request, response) => {
    const query = request.params.query.toLowerCase()
    const filter = item => item.name.toLowerCase().search(query) !== -1
    const results = data.filter(filter)
    response.json(results)
  })
}
