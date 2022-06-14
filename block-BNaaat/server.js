var http=require("http");
var server=http.createServer(handleRequest);
var fs=require("fs");

function handleRequest(req,res){
    if(req.method==="GET" && req.url==="/node"){
        res.setHeader("Content-Type","text/html");
        fs.readFile("./node.html",(err,content)=>{
            if(err) console.log(err);
            res.end(content)
        })
    }
    if(req.method==="GET"&& req.url==="/node"){
        res.setHeader("Content-Type","text/html");
        fs.createReadStream("./node.html").pipe(res);
    }
}

server.listen(5555,()=>{
    console.log("server Listening on port 5555")
})