// This gets and initializes express
const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));

// This opens the port for express
app.listen(3000, () =>{
    console.log('App listening on port 3000');
}); 

// This is called routing, this is how you route the pages. 
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'index.html'))
});

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname,'about.html'))
});

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname,'contact.html'))
});