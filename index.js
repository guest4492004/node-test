const http = require('http');

const server = http.createServer((req, res) => {
  console.log("hello");
  res.write("hi there.");
  res.end();
});

const port = 8080;
server.listen(port);
console.log('Server listen on port ' + port);
