var http = require('http');
const { Z_FIXED } = require('zlib');

var server = http.createServer(handelRequest);

function handelRequest( req, res ){
    console.log(req.methods,req.url)
    if ( req.methods === 'GET' && req.url === '/index.html' ){
        res.setHeader('Content-Type','text/html');
        fs.createReadStream('./index.html').pipe(res);
    }
    if ( req.methods === 'GET' && req.url === '/about.html' ){
        res.setHeader('Content-Type','text/html');
        fs.createReadStream('./about.html').pipe(res);
    }
    if ( req.methods === 'GET' && req.url === '/blog.html' ){
        res.setHeader('Content-Type','text/html');
        fs.createReadStream('./blog.html').pipe(res);
    }
    if ( req.methods === 'GET' && req.url === '/cases.html' ){
        res.setHeader('Content-Type','text/html');
        fs.createReadStream('./cases.html').pipe(res);
    }
    if ( req.methods === 'GET' && req.url === '/contact.html' ){
        res.setHeader('Content-Type','text/html');
        fs.createReadStream('./contact.html').pipe(res);
    }
    if ( req.methods === 'GET' && req.url === '/services.html' ){
        res.setHeader('Content-Type','text/html');
        fs.createReadStream('./services.html').pipe(res);
    }
    if(req.url.split('.').pop() === 'css') {
        // set header for css file
        res.setHeader('Content-Type', 'text/css');
        // read css file and send it in response
        fs.readFile('./assets/stylesheets/' + req.url, (err, content) => {
        if(err) return console.log(err);
        res.end(content)
        })
    }
    if ( req.methods === 'GET' && req.url === '/images') {
        res.setHeader('Content-Type','image/jpeg');
        fs.readFile('.assests/images' + req.url, (err, content)=>{
            if ( err ) return console.log(err);
            res.end(content);
        })
    }
};

server.listen( 3000, ()=>{
    console.log( ' Server is listening on port 3000 ' );
} );