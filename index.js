const http = require('http');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

/*
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  var egg='hehe'
  const msg = 'Hello Node!  ' + egg + '\n'
  res.end(msg);
});
*/

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
