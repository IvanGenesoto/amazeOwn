const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const data = require('./data')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())

app.get('/featured', (req, res) => {
  res.json(data)
})

app.get('/items/:id', (req, res) => {
  const id = +req.params.id
  const match = data.find(item => item.id === id)
  res.json(match)
})

app.get('/search/:string', (req, res) => {
  const query = req.params.string
  const results = data.filter(item => item.name.toLowerCase().search(query) !== -1)
  res.json(results)
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
