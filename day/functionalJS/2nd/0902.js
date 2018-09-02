//함수의 실행 괄호와 비동기

//무조건 한번은 실행한다는 이전의 개념

let add = function (a,b,callback) {
    setTimeout(function () {
        callback(a + b);
    }, 1000);
};
let sub = function (a ,b, callback) {
    setTimeout(function () {
        callback(a - b);
    }, 1000);
};

let div = function (a, b, callback) {
    setTimeout(function () {
        callback(a / b);
    }, 1000);
};
add(10, 15, function (a) {
    sub(a,5,function (a) {
        div(a,10,function (r) {
            console.log(r);
        })
    })
})