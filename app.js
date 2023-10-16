const express = require('express')
const path = require('path')
const hoganMW = require('hogan-middleware')

const app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'mustache')
app.engine('mustache', hoganMW.__express)

app.get('/', (req, res) => {
    // Home Page
    res.render('home', null)
})

app.listen(3000)