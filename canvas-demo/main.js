
let canvas = document.getElementById('xxx');
let ctx = canvas.getContext('2d');
let eraser = document.getElementById('eraser');
let brushColor = 'black';

let colorBox = document.getElementById('color');
let configColor = document.getElementById('configColor');
let configSize = document.getElementById('size')
let brushSize = 3;
let eraserEnable = false;

let saveImg = document.getElementById('saveImg')
let clearImg = document.getElementById('clearImg')

setCanvasSize();
userMonitor(canvas);




configColor.onchange = function () {
    document.getElementById('configColor').click();
    brushColor = this.value;
}
colorBox.addEventListener("click", function (e) {
    brushColor = e.target.className;
    e.target.classList.add('active');
    sibling(e.target).map((node) => {
        node.classList.remove('active')
    })
})


saveImg.onclick = function (e) {
    var MIME_TYPE = "image/png";

    var imgURL = canvas.toDataURL(MIME_TYPE);

    var dlLink = document.createElement('a');
    dlLink.download = 'myImg';
    dlLink.href = imgURL;
    dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');

    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);
}
clearImg.onclick = function (e) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
configSize.addEventListener("click", function (e) {
    if (e.target.nodeName === 'LI') {
        brushSize = e.target.clientWidth;
        console.log(brushSize)
        e.target.classList.add('active');
        sibling(e.target).map((node) => {
            node.classList.remove('active')
        })
    }

})

function setCanvasSize() {
    resize();
    window.onresize = function () {
        resize()
    }
}

function userMonitor(canvas) {
    let isStart = false;
    let lastPoint = { x: undefined, y: undefined };
    if (isTouchable()) {
        //
        canvas.ontouchstart = function (e) {
            let x = e.touches[0].clientX;
            let y = e.touches[0].clientY;
            isStart = true;

            if (eraserEnable) {
                ctx.clearRect(x - 8, y - 8, 16, 16);
            } else {
                lastPoint = { x: x, y: y };
            }
        }

        canvas.ontouchmove = function (e) {
            let x = e.touches[0].clientX;
            let y = e.touches[0].clientY;
            if (!isStart) {
                return;
            }
            if (eraserEnable) {
                ctx.clearRect(x, y, 10, 10);
            } else {
                let newPoint = { x: x, y: y };
                // drawCircle(x, y, 1);
                drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y, brushSize);
                lastPoint = newPoint;
            }

        }


        canvas.ontouchend = function (e) {
            isStart = false;
        }

    } else {
        canvas.onmousedown = function (e) {
            let x = e.clientX;
            let y = e.clientY;
            isStart = true;

            if (eraserEnable) {
                ctx.clearRect(x, y, 10, 10);
            } else {
                lastPoint = { x: x, y: y };
            }
        }

        canvas.onmousemove = function (e) {
            let x = e.clientX;
            let y = e.clientY;
            if (!isStart) {
                return;
            }
            if (eraserEnable) {
                ctx.clearRect(x, y, 10, 10);
            } else {
                let newPoint = { x: x, y: y };
                // drawCircle(x, y, 1);
                drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y, brushSize);
                lastPoint = newPoint;
            }

        }


        canvas.onmouseup = function (e) {
            isStart = false;
        }
    }



}



eraser.onclick = function () {
    eraser.textContent = eraserEnable ? '画笔' : '橡皮擦';
    eraserEnable = !eraserEnable;

}

function isTouchable() {
    return 'ontouchstart' in document.body;
}
function drawCircle(x, y, r) {
    ctx.beginPath();
    ctx.fillStyle = brushColor;
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
}
function drawLine(x1, y1, x2, y2, lineWidth) {
    ctx.beginPath();
    ctx.strokeStyle = brushColor;
    ctx.lineWidth = lineWidth;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();

}
function resize() {
    let pageWidth = document.documentElement.clientWidth;
    let pageHeight = document.documentElement.clientHeight;

    canvas.width = pageWidth;
    canvas.height = pageHeight;
}

//sibling节点
function sibling(elem) {
    var r = [];
    var n = elem.parentNode.firstChild;
    for (; n; n = n.nextSibling) {
        if (n.nodeType === 1 && n !== elem) {
            r.push(n);
        }
    }

    return r;
}