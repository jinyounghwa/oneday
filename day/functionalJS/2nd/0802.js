var obj ={ a: 1, "b" : 2};
obj.c = 3;
obj['d'] = 4
var e = 'e';
obj[e] = 5;
function f() {
    return 'f';
}
obj[f()] = 6;

console.log(obj);

//띄어쓰기를 써도 key 를 만들 수 있다.

var obj2 = {"a a a" : 1};
obj2['b b b'] = 2;
console.log(obj2);

//코드가 실행되지 않은 key 영역

var obj5 = {(true ? "a" : "b") : 1};
// {} 안쪽의 key영역에서는 코드를 실행할 수 없다.

//코드가 실행되는 key영역
var obj6 = {};
obj6[true ? "a" : "b"] = 1;
console.log(obj6);

//ES6 에서 동작하는 {} 안쪽에 대괄호 사용하기

var obj5 = {[true ? "a" : "b"] : 1};
//한번에 length 올리기

var obj12 = [];
obj12.length = 5;
console.log(obj12);

var obj13 = [1,2];
obj13[5] = 5;
console.log(obj13);

