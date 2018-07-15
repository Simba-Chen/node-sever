var fs = require('fs')
var http = require('http')
var url = require('url')

var server = http.createServer(function(request, response){
    var parsedUrl = url.parse(request.url, true)
    var path = request.url
    var query = ''
    if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?')) }
    var pathNoQuery = parsedUrl.pathname
    var queryObject = parsedUrl.query
    var method = request.method
    console.log(path)
    
    if(path ==='/') {
        response.setHeader('Content-Type','text/html; charset=utf-8')
        response.write('<link rel="stylesheet" href="/style.css"></link>')
        response.write('<script type="text/javascript" src="/main.js"></script>')
        response.write('<h1>这是一个node.server</h1>')
        response.end()
        console.log('/')
    }else if(path === '/style.css') {
        response.setHeader('Content-Type', 'text/css; charset=utf-8')
        response.write('body{background-color: red;}')
        response.end()
        console.log('/style.css')
    }else if(path === '/main.js') {
        response.setHeader('Content-Type','text/javascript; charset=utf-8')
        response.write('console.log("本次执行JS")')
        response.end()
        console.log('/main.js')
    }else {
        response.statusCode = 404
        response.end()
        console.log('404')
    }
})
server.listen(8080)