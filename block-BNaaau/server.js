Q1
const { Console } = require("console");
var http=require("http");
var server=http.createServer(handleRequest5000);

function handleRequest5000(req,res){
    console.log(req,res)
}
server.listen(5000);

Q2

var http=require("http");
var server=http.createServer(handleRequest5100);

function handleRequest5100(req,res){
    console.log(req,res);
    res.end("My first server in NodeJS");
}
server.listen(5100);

Q3
 var http = require('http');

var server = http.createServer(handleRequest5555);

 function handleRequest5555(req,res) {
     console.log(req.headers);
     res.end(req.headers['user-agent']);
}
 server.listen(5555);

 Q4
 var http = require('http');

var server = http.createServer(handleRequest5566);

function handleRequest5566(req,res){
console.log(req.method,req.url);
 res.end(req.method);
 res.end(req.url)
}

server.listen(5566)

Q5
var http = require('http');

var server = http.createServer(handleRequest7000);

function handleRequest7000(req,res){
    res.end(JSON.stringify(req.headers))
}
server.listen(7000,()=>{
    console.log("server listen on 70000")
})

Q6
var http = require('http');

var server = http.createServer(handleRequest3333);
function handleRequest3333(req,res){
    res.statusCode="202"
    res.end(JSON.stringify(req.headers))
}
server.listen(3333, ()=>{
         console.log('Server listing on port 3333');
     });
 
Q7

var http = require('http');

var server = http.createServer(handleRequest8000);

function handleRequest8000(req,res){
    res.setHeader("Content-Type","text/html")
    res.end("<h3>Welcome to altcampus</h3>")
}

server.listen(8000, ()=>{
    console.log('Server listing on port 3333');
});

Q8
var http = require('http');

var server = http.createServer(handleRequest8000);


 function handleRequest8000(req,res) {
    res.writeHead(201,{'content-Type': 'text/html'})
     res.end('<h3>Welcome to altcampus</h3>');
}
 server.listen(8000, ()=>{
     console.log('Server listing on port 8000');
 })

 Q9
 var http = require('http');

var server = http.createServer(handleRequest8888);
function handleRequest8888(req,res){
    res.writeHead(201,{"Content-Type":"apllication/JSON"})
    res.end (JSON.stringify ( {
                 success: true, message: 'Welcome to Nodejs'}))
}
server.listen(8888, ()=>{
    console.log('Server listing on port 8888');
})

Q10
var http = require('http');

var server = http.createServer(handleRequest5050);

function handleRequest5050(req,res){
    if(req.method==="POST", req.url==="/"){
        res.setHeader("Content-Type","text/html");
        res.end(`<h2>posted for first time</h2>`)
    }
}
server.listen(5050, ()=>{
    console.log('Server listing on port 5050');
})

Q11
var http = require('http');

var server = http.createServer(handleRequest2345);


 function handleRequest2345(req,res) {

     if(req.method === 'GET' && req.url ==='/') {
         res.setHeader('content-Type' , 'text/plane');
         console.log('Hello');
       
        } else if(req.method === 'GET' && req.url ==='/about') {
        res.setHeader('content-Type' , 'text/html');
        res.end('<h2>Hello</h2>');
    } else {
        res.statusCode =  404;
        res.end('Page Not Found')
    }
}
 server.listen(2345, ()=>{
     console.log('Server listing on port 2345 ');
 });

 Q12

 var http = require('http');
 var fs=require("fs")
 var server = http.createServer(handleRequest2345);

 function handleRequest2345(req,res) {

         if(req.method === 'GET' && req.url === '/users') {
            res.setHeader('content-Type' , 'text/html');
             fs.createReadStream('./users.html').pipe(res)
            } 
            if(req.method === 'POST' && req.url === '/user') {
                res.end('Posted for the firstime');
            }
        }
     server.listen(2345, () => {
         console.log('Server listing on port 2345 ');
     });

     Q13

     var http=require("http");
     var fs=require("fs");
     var url=require("url");

     var server=http.createServer(handleRequest2345);
     function handleRequest2345(req,res){
         var parsedUrl=url.parse(req.url,true);
         console.log(parsedUrl.pathname,req.url);
         res.setHeader("Content-Type","application/JSON");
         res.end(JSON.stringify(parsedUrl.query));
     }

     server.listen(2345, () => {
        console.log('Server listing on port 2345 ');
    });
