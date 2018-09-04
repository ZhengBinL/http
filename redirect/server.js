const http = require("http")
const fs = require('fs')
//用nodejs创建一个本地服务
http.createServer(function (request,response){
    console.log("request come",request.url)
   if(request.url === '/'){
       response.writeHead(302,{
           'Location':'/new'//Location必须和302配合使用（重定向）302表示临时跳转，301表示永久跳转
       })
       response.end('')
   }
   if(request.url === '/new'){
       response.writeHead(200,{
           'Content-Type':'text/html'
       })
       response.end('<div>this is a content</div>')
   }
}).listen(8886)