var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号\n node server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var path = request.url 
  var query = ''
  if(path.indexOf('?') >= 0){ query = path.substring(path.indexOf('?')) }
  var pathNoQuery = parsedUrl.pathname
  var queryObject = parsedUrl.query
  var method = request.method

  
  console.log('HTTP 路径\n' + path)
  console.log('查询字符串为\n' + query)
  console.log('不含查询字符串的路径为\n' + pathNoQuery);
  if(path==='/'){
	  response.setHeader('Content-Type','text/html;charset=utf-8');
	  response.write(
	  `<!DOCTYPE>\n
	  <html>
	  <head><title>node page</title>
	  <link  rel="stylesheet" href="/style"/></head>
	  <body><h1>你好 node.js</h1><script src="/main"></script>
	  </body>
	  </html>
	  `
	  );
	  response.end();
	  
  }else if(path==='/style'){
	   response.setHeader('Content-Type','text/css;charset=utf-8');
	  response.write(
	  'body{margin:0;padding:0;} h1{color:#369}'
	  );
	  response.end();
  }else if(path==='/main'){
	  response.setHeader('Content-Type','text/javascript;charset=utf-8');
	  response.write(
	  'alert("this is a js 文件！")'
	  );
	  response.end();
  }  else{
	  response.statusCode = 404;
	  response.setHeader('Content-Type','text/text;charset=utf-8');
	  response.write(
	  '404 错误'
	  );
	  response.end();
  }
  
  
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请打开 http://localhost:' + port)

