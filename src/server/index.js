const express = require('express')
const path = require('path')
const handleRequests = require('./handle-requests')
const data = require('./data')
const app = express()
const port = process.env.PORT || 3000

handleRequests(app, data)
app.use(express.static(path.join(__dirname, 'public')))
app.listen(port, () => console.log('Listening on port ' + port))
