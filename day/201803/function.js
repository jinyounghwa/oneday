//function 생성자의 확장된 역할
var add = new Function("first", "secound", "return frist + secound");

console.log(add(1,1));//2

var add1 = new Function("first", 'secound = first', "return first + secound");

console.log(add(1,1));//2
console.log(add(1));//2

var pickFirst = new Function("..args","return args[0]");
console.log(pickFirst(1,2));