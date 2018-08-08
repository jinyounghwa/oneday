// 유명(named)함수

var f1 = function f() {
    console.log(f)
}

var hi = 1;
var hello = function hi() {
    console.log(hi)
}
//유명함수를 이용한 재귀

function flatten(arr) {
    return function f(arr, new_arr) {
        arr.forEach(function (v) {
            Array.isArray(v) ? f(v, new_arr) : new_arr.push(v);
        });
        return new_arr;
    }(arr,[]);
}
flatten([1,[2],[3,4]);

flatten([1,[[2]],[[[3],4]]]);

var obj1 = {
    0 : 1,
    1 : 2
}
console.log(obj1);

var a = obj1[0];
var b = obj1[1];

b =10;
console.log(obj1);
console.log((obj1[1]));

var slice = Array.prototype.slice;
function toArray(data) {
    return slice.call(data);
}
function rest(data, n) {
    return slice.call(data, n || a);
}
var arr1 = toArray({0:a, 1:2, length:2});

arr1.push(3);
rest([1,2,3]);
