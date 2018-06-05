1. 一个块级元素的高度，是由 其内部 文档流 的高度的总和决定
	1. 文档流：文档内元素的流动的方向
	2. 行内元素从左往右流动，遇到宽度不够
	3. 块级元素从上往下依次流动
2. 一个内联元素的高度，是由字体建议行高和字体类型综合决定
3. 脱离文档流
	1. position:fixed;
	2. position:absolute;
	3. //todo
	
4. background-image:cover;  把背景图片放大到适合元素容器的尺寸，图片比例不变	
5. 行内垂直水平居中，从内往外设置css，设置padding，不要设置宽高

PS
	1. 开发中尽量不要设置width和height,用max/min-width/height