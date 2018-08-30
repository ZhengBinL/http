const http = require("http")
const fs = require('fs')
//用nodejs创建一个本地服务
http.createServer(function (request,response){
    console.log("request come",request.url)
    const html = fs.readFileSync('test.html','utf8')
    response.writeHead(200,{
        'Content-Type':'text/html',
        'Access-Control-Allow-Origin':'*'
    })
    response.end(html)
}).listen(8886)