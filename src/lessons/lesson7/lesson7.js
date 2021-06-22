function f(a, b) {
    alert( a + b );
}
Function.prototype.defer= function (delay){
    return function(a,b){
        setTimeout(()=> {
            return console.log(a + b)
        },delay)
    }
}

//f.defer(1000)(1, 2); // выведет 3 через 1 секунду.



function Animal(name = 'Animal') {
    this.name = name;
    // this.__proto__ = animal;
    this.walk = function (){
        console.log(`${this.name} is walking `)
    }
    this.eat = function (){
        console.log(`${this.name} is eating `)
    }
    this.sleep = function (){
        console.log(`${this.name} is sleeping `)
    }
}
const animal = new Animal();
// animal.eat()

function Human(name = 'Human') {
    this.name = name;
    this.__proto__ = Animal;
    this.speak = function (){
        console.log(`${this.name} is speaking `)
    }
    this.think = function (){
        console.log(`${this.name} is thinking `)
    }
}
const human = new Human()
human.speak()