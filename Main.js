var http = require('http');
// Read Environment Parameters
var port = Number(process.env.PORT || 8080);
var greeting = process.env.GREETING || 'Hello World! Atlanta';
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end(greeting + "\n");
});
server.listen(port);
app.use('/',router);

app.listen(process.env.PORT || 3000,function(){
  console.log("Listening at PORT 3000");
})
