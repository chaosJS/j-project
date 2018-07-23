!function () {
    var person = {
        name: 'lc',
        age: 18
    }
    window.addAge = function (year) {
        person.age += year;
        return person.age;
    }
}.call()
/**
 * 1. 立即执行函数使得person的信息不能被外部访问 
 * 2. 匿名函数
 * function (year) {
        person.age += year;
        return person.age;
    }
    操作了外部person的信息，于是这个函数和外部变量就构成闭包
 * 
 * 3. window.addAge保存了匿名函数的地址
 * 
 * 4. 任何地方都可以使用window.addAge操作person的数据，但是无法直接访问person
 */