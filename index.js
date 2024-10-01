var express = require('express');
var server = express();
const path = require('path');


// // This will be call by APPLE TO VERIFY THE APP-SITE-ASSOCIATION 
// // Make the 'apple-app-site-association' accessable to apple to verify the association
// server.get('/.well-known/apple-app-site-association', function(request, response) {
//   response.sendFile(__dirname +  '/apple-app-site-association');
// });

// HOME PAGE
// server.get('/', function(request, response) {
//   response.sendFile(__dirname +  '/home.html');
// });

// ABOUT PAGE
server.get('/about', function(request, response) {
  response.sendFile(__dirname +  '/about.html');
});

server.get('/', (req, response) => {
  response.sendFile(__dirname +  '/index.html');
  // response.sendFile(__dirname +  '/home.html')
});

// Middleware para servir apple-app-site-association
server.get('/.well-known/apple-app-site-association', function(req, res) {
  res.set('Content-Type', 'application/json');
  res.sendFile(path.join(__dirname, '.well-known', 'apple-app-site-association'));
});
server.listen(80);