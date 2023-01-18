// In this task, you will:

// create a server  
// Write a program that runs on port 3000 and responds with  '<h1>Hello Node!!!!</h1>\n' 
// when someone reaches http://localhost:3000



var http = require('http')
http.createServer((request,response)=>{
    response.end("<h1>hello world</h1>\n")
}).listen(3000)