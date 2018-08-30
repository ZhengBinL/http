const http = require("http")
const fs = require('fs')
//内容安全策略
http.createServer(function (request,response){
    console.log("request come",request.url)

    if(request.url === '/'){
        const html = fs.readFileSync('test.html',"utf8")
        response.writeHead(200,{
            'Content-Type':'text/html',
            'Content-Security-Policy':'default-src http: https:'//限制所有src的连接只能是HTTP或者HTTPS请求
            //'Content-Security-Policy':'script-src \'self\''只限制script中的src，不会限制img等中的src
            //'Content-Security-Policy':'default-src \'self\''//限制只能在本域名下引用外联的js
            //'Content-Security-Policy':'form-action \'self\''//限制form表单提交只能在本域名下
            //详情请搜索mdn csd
        })
        response.end(html)
    }else{
        response.writeHead(200,{
            'Content-Type':'application/javascript'
        })
        response.end('console.log("loaded script")')
    }
}).listen(8889)