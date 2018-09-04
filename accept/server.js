const http = require("http")
const fs = require('fs')
const zlib = require('zlib')
//用nodejs创建一个本地服务
http.createServer(function (request,response){
    console.log("request come",request.url)
    const html = fs.readFileSync('test.html')
    response.writeHead(200,{
        'Content-Type':'text/html',
        'Content-Encoding':'gzip'
    }) 
    response.end(zlib.gzipSync(html))
}).listen(8886)