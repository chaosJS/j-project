var result = `/*
阿斯法防
阿什福阿发阿发啊发放阿发是否斯蒂芬斯蒂芬十多个删掉fsdfsd是dfs
是巅峰时代删掉三国杀放到ss
*/
*{
    transition:all,1s;
}
html{
background:rgb(222,222,222);
font-size:16px;
}
#code{
    border:1px  solid red;
    padding:15px;
}

/*我需要一点代码高亮:*/

.token.selector{
    color:#690;
}
.token.property{
    color:#905;
}
.token.function{
    color:#DD4A68;
}


/*加点3D效果:*/
#code{
    transform:rotate(360deg);
}
/*介绍我自己*/
/*我需要一张白纸*/
`;

var result2 = `/*


`
var n = 0;
var id = setInterval(
    () => {
        n += 1;
        code.innerHTML = result.substring(0, n);
        code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'css');
        styleTag.innerHTML = result.substring(0, n);
        if (n >= result.length) {
            clearInterval(id);
            // 开始执行result2
            fn2();
            fn3(result);
        }

    },
    10);
function fn2() {
    var paper = document.createElement('div');
    paper.id = 'paper';
    document.body.appendChild(paper);
}
function fn3(preResult) {
    var result = `
    #paper{
        width:100px;
        height:100px;
        background:red;
    }
    `;
    var n = 0;
    var id = setInterval(
        () => {
            n += 1;
            code.innerHTML = preResult + result.substring(0, n);
            code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'css');
            styleTag.innerHTML = preResult + result.substring(0, n);
            if (n >= result.length) {
                clearInterval(id);

            }

        },
        10);
}
