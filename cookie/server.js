const http = require("http")
const fs = require('fs')
//用nodejs创建一个本地服务
http.createServer(function (request,response){
    console.log("request come",request.url)
    const host = request.headers.host
    if(request.url === '/'){
        const html = fs.readFileSync('test.html','utf8')
        if(host === 'test.com'){
            response.writeHead(200,{
                'Content-Type':'text/html',
                // 'Set-Cookie':'id=asasd'
                'Set-Cookie':['id=asasd; max-age=10','name=zhengsan; HttpOnly; domain=test.com']//过期时间
            })
            
        }
        response.end(html)
    }
}).listen(8886)