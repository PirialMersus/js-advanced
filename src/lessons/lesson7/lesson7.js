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