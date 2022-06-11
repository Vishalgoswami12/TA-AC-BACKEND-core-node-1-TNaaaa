var http=require("http");

var server=http.createServer(handleRequest);
function handleRequest(req,res){
    res.end("Welcome");
}
    server.listen(4000,()=>{
        console.log("serber listening on port 4000")
    })
