const http = require('http');

const server = http.createServer((req, res) => {
  console.log("hello new deploy");
  res.write("hi there on ec2-new.");
  res.end();
});

const port = 8080;
server.listen(port);
console.log('Server listen on port ' + port);
