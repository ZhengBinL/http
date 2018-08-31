const http = require("http")
const fs = require('fs')
//用nodejs创建一个本地服务
http.createServer(function (request,response){
    console.log("request come",request.url)
    // const html = fs.writeFileSync('test.html','utf8')
    // response.writeHead(200,{
    //     'Content-Type':'text/html'
    // })
    response.writeHead(200,{
        'Access-Control-Allow-Origin':'*'//服务端设置接受所有来源的请求
    })
    response.end('123')
}).listen(8887)