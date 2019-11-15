var bools:boolean = false
var num:number = 123
var ste:string = '1'
var arr1:number[] = [1, 2]
var arr2:Array<string> = ['1', '2']
let arr3:[string, number] = ['1', 1] // 元组类型
let unb:number | undefined | null
let a:void
// let b:never = (() => {
//   throw new Error()
// })()
// console.log(b)

enum Flag{
  one,
  two = 1,
  three = '1'
}

let flags:Flag = Flag.one
function Main (value:any):void {
  console.log('rounded-right')
  console.log(value)
}

export default function Print (value:any) {
  console.log('we')
  Main(value)
}

// 函数方法
var niming = function (name:string, age?:number):void {

}
function restfunc (...arr:number[]) {
}
restfunc(1, 2, 3)
niming('1')
niming('1', 1)

// 函数重载

class Person {
  protected name:string; // 省略public

  constructor (name:string) {
    this.name = name
  }
  run ():void {
    console.log(this.name + '-->run')
  }
  getName ():string {
    return this.name
  }
  setName (name:string):void {
    this.name = name
  }
}

var p = new Person('zhangsan')

class Student extends Person {
  private age:number | undefined
  // private 只能在自己的类中使用
  // protected 只能在类中使用
  // public 都可以使用
  constructor (name:string, age?:number) {
    super(name)
    this.age = age
  }
  run ():string {
    console.log(this.name + '-->big run')
    return this.name
  }
  work ():void {
    console.log(1111111)
  }
  static a () {
    return '-'
  }
}
var s = new Student('lisi')
console.log(s)
s.getName()
s.work()
s.run()

// 静态方法

// 抽象类和抽象方法用来定义标准化
abstract class Animal {
  abstract eat ():any;
}

// 属性类型接口，传参约束
function interone (label:Fullname) {

}
interface Fullname {
  first:string;
  two?:string; // 可选属性
}
var obj = {
  age: 12,
  first: 'string'
}
interone(obj) // 这种方式可以传入多余的参数，
interone({
  first: '-'
  // age: 11
}) // 这种方式不可以

// 定义方法
interface method {
  (key:string, value:string):string
}

var aa:method = function (key:string, value:string):string {
  return '-'
}

// 对数组约束，可索引
interface arr {
  [index:number]:string
}

// 对对象的约束
interface Obj {
  [index:string]:string
}

// 对类约束
interface Method {
  name:string
  eat (name:string):string
}
class A implements Method {
  name:string
  constructor () {
    this.name = name
  }
  eat (name:string):string {
    return '-'
  }
}

function fan<T> (name:T):T {
  return name
}
fan('-')

class aaa<T> {

}

// var b = new aa<string>()

interface abab {
  <T>(key:T):T
}

function methods<T> () {

}

class qqo {

}
