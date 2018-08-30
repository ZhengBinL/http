const http = require("http")
//用nodejs创建一个本地服务
http.createServer(function (require,response){
    console.log("request come",require.url)
    
    response.end('123')
}).listen(8899)