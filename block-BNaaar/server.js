var http =  require("http");
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    if(req.method==="GET" && req.url==="/"){
        res.setHeader("Create-Content","text/plain");
        res.end("Hello");
    }else if(req.method === "GET" && req.url === "/about"){
        res.setHeader("Content-Type","text/html")
        res.end("<h2>This is all about node js</h2>")
    } else if(req.method === 'POST' && req.url === '/about') {
        res.setHeader('Content-Type', 'application/json');
        res.end('{message: this is a post request}')
    }    
}
server.listen(4000, () => {
    console.log("Server listening on port 4000")
})