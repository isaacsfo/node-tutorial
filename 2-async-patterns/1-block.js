const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home page');
  }
  if (req.url === '/about') {
    // BLOCKING CODE
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 100; j++) {
        console.log(`${i} - ${j}`);
      }
    }
    res.end('About page');
  }
  res.end('Error Page');
});

server.listen(8000, () => {
  console.log('Server listening on port : 8000....');
});
