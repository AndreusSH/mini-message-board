const express = require('express')
const path = require('path')
const messages = require('./messages'); // Importing messages object
const fs = require('fs');


const app = express()


app.set('views', path.join(__dirname, 'templates')); 
// Set EJS as the template engine
app.set('view engine', 'ejs');


// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 8080
app.get('/', function (req, res) {
    res.render('messages', { messages: messages });
})
app.get('/form', function (req, res) {
    
    res.render('form');
})

app.post('/new', function (req, res) {
    console.log(req.body); 
    const { user, text } = req.body;
    const currentDate = new Date();
    messages.push({ user, text, added: currentDate });
    fs.writeFileSync('./messages.js', 'module.exports = ' + JSON.stringify(messages, null, 4));
     // Redirect back to home
    res.redirect('/');
});
app.listen(port)
console.log('Server started at http://localhost:' + port)