// alert("this is a js 文件！")
window.jQuery.promiseAjax = function (options) {
    let { method, url, headers, successFn, failFn, body } = options;
    return new Promise(
        (resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open(method, url);
            for (let key in headers) {
                request.setRequestHeader(key, headers[key])
            }
            request.onreadystatechange = function () {
                if (request.readyState === 4) {
                    if (request.status >= 200 && request.status < 300) {
                        resolve(request.responseText);
                    } else {
                        reject.call(undefined, request)
                    }
                }
            }

            request.send(body);
        }
    )
}
promiseBtn.addEventListener('click', (e) => {
    jQuery.promiseAjax({
        url: '/xxx',
        method: 'get',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'chao': '19'
        },
        body: {
            '1': '2',
            'fd': 'asd'
        }
    }).then(
        (text) => { console.log(text); return text },
        (req) => { console.log(req) })
        .then(
            (res) => { console.log(res.toString()) },
    )
})