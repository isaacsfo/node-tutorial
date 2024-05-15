// const http = require('http');
import { http } from 'node:http';

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page');
  }
  if (req.url === '/about') {
    res.end('Here is our short history');
  }
  res.end(`
  <h1>Ops!</h1>
  <p>We can't seem to find de page you are looking for</p>
  <a href='/'>back home</a>
  
  `);
});

server.listen(8000);
