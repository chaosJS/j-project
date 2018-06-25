1. 一切函数都是对象
2. 一切对象都是由函数创建的，所有函数都是由Function创建的，每个函数都是一个Function对象。
3. 对象.__proto__ ===  函数.prototype    
4. 函数有一个prototype属性，也是对象，这个对象默认的有一个constructor属性，指向函数本身
5. 对象都有 __proto__ 属性  ，指向创建出这个对象的函数的prototype

----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------

1. Object.prototype 也是对象，但是Object.prototype.__proto__  === null
2. 函数也是对象，函数对象.__proto__ === 创建出这个对象的函数（Function）.prototype
3. Function也是对象，也有__proto__ 所以：Function.__proto__ === Function.prototype，自己创建自己
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
1. function Foo(){}//构造函数
2. var f1 = new Foo();//f1对象 由Foo()创建
3. f1.__proto__ === Foo.prototype
4. 一切函数都是对象，Foo构造函数也是对象，由Function创建，所以，Foo.__proto__ === Function.prototype
	例子：var f2 = new Function('x','y','return x+y;');
5. Foo.prototype当然是对象，所以，Foo.prototype.__proto__ === Object.prototype，
	例子：var obj = new Object(); 
6. 特例：Object.prototype也是对象，但是 Object.prototype.__proto__ === null
7. var obj1 = new Object();//或者简写：var obj1 = {};
8. obj1.__proto__ === Object.prototype  //对象的 __proto__ 指向 创建出这个对象的函数
9. Object 是一个构造（函数），每个函数都是一个Function对象, var 函数 = new Function()，Object 是Function构造出来，所以：Object.__proto__ === Function.prototype
10. 所有函数都是被 Function 创建的, 而Function 本身是函数，	Function是被自己创造自己，函数又都是对象，所以，Function.__proto__ === Function.prototype
11. 最后总结：先有Object.prototype（原型链顶端），
	然后Function.prototype继承Object.prototype而产生，
	最后，Function构造函数和Object构造函数和其它构造函数继承Function.prototype而产生。
