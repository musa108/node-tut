const http = require('http');

const server = http.createServer((req,res) =>{
   if (req.url === '/') {
     res.end('Welcome to my page')
   }
   if (req.url === '/about') {
    res.end('wecome to about page')
   }
   res.end(`<h1>Oops!</h1>
   <p>Can't seems to find the page you are looking for</p>
   <a href="/">back home</a>`)

})
server.listen(5000)