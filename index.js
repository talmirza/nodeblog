// const http = require('http');
// const fs = require('fs');
// const aboutPage = fs.readFileSync('about.html');
// const contactPage = fs.readFileSync('contact.html');
// const homePage = fs.readFileSync('index.html');
// const notFoundPage = fs.readFileSync('404.html');

// const server = http.createServer((req,res) => {
//     if(req.url === '/about')
//         res.end(aboutPage);
//     else if(req.url === '/contact')
//         res.end(contactPage);
//     else if(req.url === '/')
//         res.end(homePage);
//     else {
//         res.writeHead(404);
//         res.end(notFoundPage);
//     }
// })

// server.listen(3000);

// This gets and initializes express
const express = require('express');
const app = express();
const path = require('path');

// This opens the port for express
app.listen(3000, () =>{
    console.log('App listening on port 3000');
}); 

// This is called routing, this is how you route the pages. 
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'index.html'))
});