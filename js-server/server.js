var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if (!port) {
	console.log('请指定端口号\n node server.js 8888 这样不会吗？')
	process.exit(1)
}

var server = http.createServer(function (request, response) {
	var parsedUrl = url.parse(request.url, true)
	var path = request.url
	var query = ''
	if (path.indexOf('?') >= 0) { query = path.substring(path.indexOf('?')) }
	var pathNoQuery = parsedUrl.pathname
	var queryObject = parsedUrl.query
	var method = request.method
	console.log('HTTP 路径  path::' + path)
	console.log('查询字符串为::' + query)
	console.log('不含查询字符串的路径为::' + pathNoQuery);


	if (path === '/') {
		let str = fs.readFileSync('./index.html', 'utf-8');
		str = str.replace('___amount___', fs.readFileSync('./db', 'utf-8'));
		response.setHeader('Content-Type', 'text/html;charset=utf-8');
		response.write(str);
		response.end();

	} else if (path === '/style') {
		let str = fs.readFileSync('./style.css', 'utf-8');

		response.setHeader('Content-Type', 'text/css;charset=utf-8');
		response.write(
			str
		);
		response.end();
	} else if (path === '/main') {
		let str = fs.readFileSync('./main.js', 'utf-8');
		response.setHeader('Content-Type', 'text/javascript;charset=utf-8');
		response.write(
			str
		);
		response.end();
	} else if (pathNoQuery === '/pay') {
		let amount = fs.readFileSync('./db', 'utf-8');
		var newAmount = amount - 1;
		if (Math.random() > 0.2) {
			fs.writeFileSync('./db', newAmount);
			response.setHeader('Content-Type', 'application/javascript');
			response.statusCode = 200;
			response.write(
				`
			${queryObject.callback}.call(undefined,${newAmount})
			`
			);
		} else {
			response.statusCode = 400;

			response.write('fail');
		}
		response.end();

	} else {
		response.statusCode = 404;
		response.setHeader('Content-Type', 'text/text;charset=utf-8');
		response.write(
			'404 错误'
		);
		response.end();
	}


})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请打开 http://localhost:' + port)

