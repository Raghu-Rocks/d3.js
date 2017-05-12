var http = require('http')

var server = http.createServer(function(req, res){
    console.log(req.url);

    if(req.url.endsWith('.josn')){

    }
    if(req.method=="GET")

    res.write('1')
    res.write('2')
    res.write('4')
    res.end('Basic Http Server - Static')
})

server.listen(3000);