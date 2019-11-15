class Person {
  constructor () {
    this.name = name
    this.run = function () {
      console.log(this.name)
    }
  }
}

function People () {
  this.name = name

  this.run = function () {
    console.log(111)
  }
}
Person.staticFunc = function () {
  console.log(222)
  // 静态方法
}
Person.prototype.sex = '男' // 共享属性
// (一)对象冒充实现继承
function Web () {
  Person.call(this) // 原型链+对象冒充的组合继承，可以继承构造函数的方法，但是不能继承原型链上的方法
}

// (二)原型链实现继承
Web.prototype = new People() // 可以继承构造函数方法和原型链的方法和属性，但是实例化子类的时候没法给父类传参

// (三)对象冒充+原型链继承，既可以继承构造函数和原型链上的方法，也可以给实例化子类的时候给父类传参
function Webs () {
  Person.call(this, name) // 后面需要加参数
}
Webs.prototype = new Person()
Webs.prototype = Person.prototype // 另一种继承原型链的方法
