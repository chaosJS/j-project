var http = require('http')
var fs = require('fs')
var url = require('url')
var queryString = require("querystring");
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
		response.setHeader('Content-Type', 'text/html;charset=utf-8');
		response.write(str);
		response.end();

	} else if (pathNoQuery === '/books/1') {
		let booksInfo = fs.readFileSync('./db', 'utf-8');
		response.setHeader('Content-Type', 'application/json');
		response.statusCode = 200;
		response.write(
			`
		${booksInfo}
			`
		);
		response.end();

	} else if (path === '/use-vue') {
		let str = fs.readFileSync('./use-vue.html', 'utf-8');
		response.setHeader('Content-Type', 'text/html;charset=utf-8');
		response.write(str);
		response.end();
	} else if (path === '/sign-up' && method === 'GET') {
		let str = fs.readFileSync('./sign-up.html', 'utf-8');
		response.statusCode = 200;
		response.setHeader('Content-Type', 'text/html;charset=utf-8');
		response.write(str);
		response.end();
	} else if (path === '/sign-up' && method === 'POST') {
		var obj = null;
		var currentData = '';
		request.on('data', function (data) {
			currentData += data;
		}).on('end', () => {
			obj = queryString.parse(currentData);
			let { email, password, confirmPassword } = obj;
			if (!email.includes('@')) {
				response.statusCode = 400;
				response.setHeader('Content-Type', 'application/json;charset=utf-8');
				response.write(`
					{"error":"invalid email" "code":0}
				`)
				response.end();


			} else if (password !== confirmPassword) {
				response.statusCode = 400;
				response.write('password is not same')
				response.end();

			} else {
				var db_users = fs.readFileSync('./users', 'utf-8');
				var users
				try {
					users = JSON.parse(db_users);
				} catch (e) {
					users = [];
				}
				let isUsed = false;
				users.forEach(userInfo => {
					userInfo.email === email;
					isUsed = true;
				});
				if (isUsed) {
					response.statusCode = 400;
					response.write('email 已经被使用')
					response.end();
				} else {
					users.push({ email, password })
					fs.writeFileSync('./users', JSON.stringify(users));
					response.writeHead(200, { "ContentType": "text/html;charset=utf-8" });
					response.end();
				}


			}

		});

	} else if (path === '/sign-in' && method === 'GET') {
		let str = fs.readFileSync('./sign-in.html', 'utf-8');
		response.statusCode = 200;
		response.setHeader('Content-Type', 'text/html;charset=utf-8');
		response.write(str);
		response.end();
	} else if (path === '/sign-in' && method === 'POST') {
		var obj = null;
		var currentData = '';
		request.on('data', function (data) {
			currentData += data;
		}).on('end', () => {
			obj = queryString.parse(currentData);
			let { email, password } = obj;


		});
	}
	else {
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

