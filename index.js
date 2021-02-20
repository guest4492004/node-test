const http = require('http');

const server = http.createServer((req, res) => {
  console.log("hello new deploy3");
  res.write("hi there on ec2-task3.");
  res.end();
});

const port = 8080;
server.listen(port);
console.log('Server listen on port ' + port);
