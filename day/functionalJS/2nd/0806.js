let a = false;

let c = a ? 10 : function f(arr, v) {
    if(!arr.length) return v;
    v += arr.shift();
    return f(arr,v);
}([1,2,3],0);
console.log(c);

var d = a ? 10 : function f(arr , v) {
    return arr.length ? f(arr, v + arr.shift()) : v;
}([1,2,3],0)

console.log(d);