// _.compose = function(){
//     var args = arguments;
//     var start = args.length -1;
//     return function(){
//         var i = start;
//         var result = args[start].apply(this, arguments);
//         while(i--) result = args[i].call(this, result);
//         return result;
//     }
// }

let greet = function(name){return "hi:" + name};
let exclaim = function(statement) {return statement.toUpperCase() + "!"};
let welcome = _.compose(greet, exclaim);
console.log(welcome("moe"));

var a = 10;
var b = 20;

function f1() {
    return a + b;
}
f1();

function f2() {
    var a = 10;
    var b = 20;
}





