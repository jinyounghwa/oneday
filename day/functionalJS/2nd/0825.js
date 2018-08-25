//기본적인 비동기 상황
console.log(1);
setTimeout(function () {
    console.log(3)
},1000);
console.log(2);

//콜백 함수로 결과 받기

var add = function (a,b,callback) {
    setTimeout(function () {
        callback(a+b);
    },1000)
}
add(10,5,function (r) {
    console.log(r);
});