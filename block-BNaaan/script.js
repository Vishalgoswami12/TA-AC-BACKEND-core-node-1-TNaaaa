var http=require("http");
var server=http.createServer("handleRequest");
function handleRequest(req,res){
console.log(req.headers);
console.log(req.method,req.url)
}
server.listen(3000);