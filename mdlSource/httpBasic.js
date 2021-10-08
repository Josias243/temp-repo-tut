let http = require('http');

//create a server 
let server = http.createServer((req, res) => {
    if (req.url==='/') {
        res.end("<p>Welcome to our Page</p>");
    }
    if (req.url==='/about') {
        res.end("<p>this is about the server</p>");
    }
    res.end('<h3>oops</h3><a href="/">home</a>');
});
server.listen(4500);