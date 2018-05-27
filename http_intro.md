客户端发送一个HTTP请求到服务器的请求消息包括以下格式：

请求行（request line）、请求头部（header）、空行和请求数据四个部分组成。
1. 请求行，用来说明请求类型,要访问的资源以及所使用的HTTP版本.
2. 请求头部，紧接着请求行（即第一行）之后的部分，用来说明服务器要使用的附加信息
从第二行起为请求头部，HOST将指出请求的目的地.User-Agent,服务器端和客户端脚本都能访问它,它是浏览器类型检测逻辑的重要基础.该信息由你的浏览器来定义,并且在每个请求中自动发送等等
3. 空行，请求头部后面的空行是必须的
4. 请求数据也叫主体，可以添加任意的其他数据。

Chrome开发者工具查看 HTTP 请求内容：
打开 Network
地址栏输入网址
在 Network 点击，查看 request，点击「view source」
可以看到请求的前三部分了
如果有请求的第四部分，那么在 FormData 或 Payload 里面可以看到

HTTP 响应包括哪些部分
HTTP响应也由四个部分组成，分别是：状态行、消息报头、空行和响应正文。
1. 状态行，由HTTP协议版本号， 状态码， 状态消息 三部分组成。
第一行为状态行，（HTTP/1.1）表明HTTP版本为1.1版本，状态码为200，状态消息为（ok）

2. 消息报头，用来说明客户端要使用的一些附加信息
第二行和第三行为消息报头，

3. 空行，消息报头后面的空行是必须的
4. 响应正文，服务器返回给客户端的文本信息。

Chrome开发者工具查看 HTTP 响应内容：
打开 Network
输入网址
选中第一个响应
查看 Response Headers，点击「view source
你会看到响应的前两部分
查看 Response 或者 Preview，你会看到响应的第 4 部分

如何使用 curl 命令：

	curl是基于URL语法在命令行方式下工作的文件传输工具，它支持FTP，FTPS，HTTP，HTTPS，GOPHER，TELNET，DICT，FILE及LDAP等协议。curl支持HTTPS认证，并且支持HTTP的POST,PUT等方法，FTP上传，kerberos认证，HTTP上传，代理服务器，cookies，用户名/密码认证，通过http代理服务器上传文件到FTP服务器等等，功能十分强大。
	
	-A/--user-agent <string> 设置用户代理发送给服务器，即告诉服务器浏览器为什么
    -basic 使用HTTP基本验证
    --tcp-nodelay 使用TCP_NODELAY选项
    -e/--referer <URL> 来源网址，跳转过来的网址
    --cacert <file> 指定CA证书 (SSL)
    --compressed 要求返回是压缩的形势，如果文件本身为一个压缩文件，则可以下载至本地
    -H/--header <line>自定义头信息传递给服务器
    -I/--head 只显示响应报文首部信息
    --limit-rate <rate> 设置传输速度
    -u/--user <user[:password]>设置服务器的用户和密码
    -0/--http1.0 使用HTTP 1.0