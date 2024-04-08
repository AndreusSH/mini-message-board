const express = require('express')
const path = require('path')
const messages = require('./messages'); // Importing messages object

const app = express()


app.set('views', 'C:\\Users\\andre\\OneDrive\\Desktop\\mini-message-board\\templates');

// Set EJS as the template engine
app.set('view engine', 'ejs');


const port = process.env.PORT || 8080
app.get('/', function (req, res) {
    res.render('messages', { messages: messages });
})


app.listen(port)
console.log('Server started at http://localhost:' + port)