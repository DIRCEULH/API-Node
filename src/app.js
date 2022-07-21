const express = require('express')
const app = express()
const cors = require('cors')

//Rotas
const index = require('./routes/index')
const personRoute = require('./routes/personRoute')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use('/', index)
app.use('/person', personRoute)

module.exports = app
