const http = require('http');

const server = http.createServer( (req,res) => {
    console.log('request made');

    console.log(req.url, req.method);
    
    // res.setHeader('Content-type', 'text/html');
    
    if(req.url === '/home' ){
        res.setHeader('Content-type', 'text/html');
        res.write('<p>Koga</p>');
        res.end();
    }
    else{
        res.setHeader('Content-type', 'text/html');
        res.write('<p>Nikoga!</p>');
        res.end();
    }
    
});

server.listen(3000,'localhost', ()=> {
    console.log('listening for request');
})
