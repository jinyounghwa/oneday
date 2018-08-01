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
    function f3(c,d) {
        return c + d;
    }
    return f3;
}
var f4 = f2();
f4(5,7);

function f4() {
    var a = 10;
    var b = 20;
    function f5() {
        return a+b;
    }
    return f5();
}
f4();
function f6() {
    const a = 10;

    function f7(b) {
        return a + b;
    }
    return f7;
}

const f8 = f6();
f8(20);

function f9() {
    const a = 10;
    const f10 = function (c) {
        return a + b + c;
    };
    let b = 20;
    return f10;
}
let f11 = f9();
f11(30);




