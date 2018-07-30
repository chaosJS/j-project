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
    padding:15px;
    border: 1px solid #369;
    -webkit-box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.1) inset;
    -webkit-border-bottom-right-radius: 6px 50px;    
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
    transform: perspective(5000px) rotateY(30deg);
    transform-origin: 0 50%;
}
/*介绍我自己*/
/*我需要一张白纸*/
#code{
    position:fixed;
    left:30px;
    width:50%;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.5);
}
`;

var result2 = `
#paper{
    position:fixed;
    right:0;
    width:50%;
    height:100%;
    background:#000;
    display:flex;
    justify-content:center;
    align-items: center;
    padding:16px;
}
#paper> .content{
    background:#fff;
    height:100%;
    width:100%;
    padding:10px;
}
/* 接下来把markdown变成html*/
`;
var md = `
# 标题1
## 标题2
**这是加粗的文字**

\`\`\`
let a = {
    name:'lc',
    age:18
};
\`\`\`
- 列表内容
+ 列表内容
* 列表内容


- [x] 选项一
- [ ] 选项二  
- [ ]  [选项3]
`
writeToCode('', result, createPaper);
function createPaper(fn) {
    var paper = document.createElement('div');
    paper.id = 'paper';
    var content = document.createElement('pre');
    content.className = 'content';
    paper.appendChild(content);
    document.body.appendChild(paper);
    writeToCode(result, result2, () => {
        writeMarkdown(md)
    })
}
// 把code写到code和style标签
function writeToCode(prefix, code, fn) {
    let domCode = document.querySelector('#code');
    domCode.innerHTML = prefix || '';
    let n = 0;
    let id = setInterval(
        () => {
            n += 1;
            domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css, 'css');
            styleTag.innerHTML = prefix + code.substring(0, n);
            domCode.scrollTop = domCode.scrollHeight;
            if (n >= code.length) {
                clearInterval(id);
                fn.call();
            }
        },
        10);
}

function writeMarkdown(markdown) {
    let domPaper = document.querySelector('#paper>.content');
    let n = 0;
    let id = setInterval(
        () => {
            n += 1;
            domPaper.innerHTML = markdown.substring(0, n);

            domPaper.scrollTop = domPaper.scrollHeight;
            if (n >= markdown.length) {
                clearInterval(id);
                setTimeout(() => {
                    domPaper.innerHTML =
                        marked(markdown);
                }, 500)

            }
        },
        10);

}