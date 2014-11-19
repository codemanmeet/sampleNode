
var restify = require('restify');
var server = restify.createServer();
server.use(restify.bodyParser());
server.use(restify.gzipResponse());
 
server.post({ path: '/ping'}, pingCreation);

function pingCreation(request, result, next) {
  console.log(request.body, typeof request.body);
  console.log(request.body['handshake']);
  if(request.body.handshake == "ping") {
    result.send({"handshake":"ack"});
  }
  else {
    result.send({ "handshake":"notack" });
  }
  
  return next();
}

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
