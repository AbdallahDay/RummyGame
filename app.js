const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

// Home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// 404 page
app.use((req, res) =>{
    res.status(404).sendFile(__dirname + '/views/404.html');
});