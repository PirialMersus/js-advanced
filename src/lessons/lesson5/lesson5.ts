console.log('Lesson 5');

// Keyword - this
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this
// https://learn.javascript.ru/object-methods
// https://habr.com/ru/company/ruvds/blog/419371/
// https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT

// А тут заходим и ставим лайк!!!
// https://www.youtube.com/watch?v=T1vJ8OdJq0o

// https://www.youtube.com/watch?v=xY-mwUzDjsk

// Keyword - new. Function-constructor
// https://learn.javascript.ru/constructor-new
// https://metanit.com/web/javascript/4.5.php
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/new

// Call, Apply, Bind
// https://learn.javascript.ru/call-apply-decorators
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE-%D0%BE-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B0%D1%85-apply-call-%D0%B8-bind-%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D1%85-%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-javascript-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D1%83-ddd5f9b06290


// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта

type someObjType = {
    name: string;
    age: number;
}

let someObj: someObjType = {
    name: 'Eugene',
    age: 32
}

// const greeting = {
//     name: 'Eugene',
//     age: 32,
//     f(){
//         return `My name is ${this.name}. I am ${this.age}`
//     }
// }
// console.log(greeting.f())


// Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект

// const counter = {
//     count: 0,
//     getCurrentCount: function (){
//         console.log(this.count)
//     },
//     increment: function (){
//         this.count ++
//     },
//     decrement: function (){
//         this.count --
//     },
//     setCurrentCount: function (currentCount: number){
//         this.count = currentCount
//     },
//     restCurrentCount: function (){
//         this.count = 0
//     },
// }
// console.dir(counter)
// counter.getCurrentCount()
// counter.increment()
// counter.getCurrentCount()
// counter.setCurrentCount(16)
// counter.getCurrentCount()
// counter.restCurrentCount()
// counter.getCurrentCount()


// Task 03
// переделайте код из Task 02, что бы сработал следующий код:
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12

// const counter = {
//     count: 0,
//     getCurrentCount: function (){
//         console.log(this.count)
//     },
//     increment: function (){
//         this.count ++
//         return counter
//     },
//     decrement: function (){
//         this.count --
//         return counter
//     },
//     setCurrentCount: function (currentCount: number){
//         this.count = currentCount
//         return counter
//     },
//     restCurrentCount: function (){
//         this.count = 0
//         return counter
//     },
// }
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount()

// Task 04
// Написать функцию конструктор myFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// у которого будут эти свойства и метод greeting из Task 01

// function MyFirstConstructorFunc(this: any, name: string, age:number) {
//
//     this.name = name
//     this.age = age
// }
// // @ts-ignore
// const result: someObjType  = new MyFirstConstructorFunc('asd', 34)
// console.log(result)

// Task 05 есть 2 объекта One и Two. С помощью bind и метода sayHello заставьте поздороваться объект One

let One = {
    name: 'One',
    hi: function () {
        helperObj.greeting.bind(Two)()
    }
};

let Two = {
    name: 'Two',
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}`)
    }
};
// Two.sayHello.bind(One)()

// Task 06
// создайте объект helperObj у которого есть следующие методы:
// changeName - меняет значение у свойства name объекта на полученное значение
// setAge - устанавливает полученное значение в свойство age объекта
// greeting - используется функция sayHello из Task 05
// можно использовать @ts-ignore

type HelperType = {
    changeName: Function;
    setAge: (age: number) => void;
    greeting: Function;
};

const helperObj: HelperType = {
    changeName: function (name: string) {
        // @ts-ignore
        this.name = name
    },
    setAge: function (age: number) {
        // @ts-ignore
        this.age = age
    },
    greeting: Two.sayHello
}
// helperObj.changeName.call(One, 'TestName');
// helperObj.greeting.call(One);


// Bind
// 1) Дана функция sumTwoNumbers, реализовать функцию bindNumber которая принимает функцию sumTwoNumbers и число, и
// возвращает другую функцию, которое также принимает число и возвращает сумму этих чисел. Замыкание использовать нельзя
// function sumTwoNumbers(a: number, b: number): number {
//     return a + b
// };
//
// function helper(f: Function, n: number) {
//     return f.bind(null, n)
// }
//
// const result = helper(sumTwoNumbers, 10)
// console.log(result(5))

// 2) Напишите функцию которая принимает первым аргументом объект One, а вторым helperObj. Данная функция
// возвращает другую функцию которая принимает строку в качестве аргумента и устанавливает ее свойству name объекта One
// function secondTask(One: any, helperObj: HelperType){
//     return function (string: string){
//         One.name = string
//     }
// }
// secondTask(One, helperObj)('hello')
// console.log(One.name)
// 3) Одной строкой установить с помощью helperObj объекту Two поле age в значение 30
// helperObj.setAge.call(Two, 30)
// console.dir(Two)
// 4) Создать метод hi у объекта One, который всегда вызывает метод greeting объекта helperObj от имени Two

// Реализовать задачи 2-4 из Bind с помощью Call

One.hi()
// just a plug
export default () => {
};