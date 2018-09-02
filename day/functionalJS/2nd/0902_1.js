//함수를 감싸서 없던 공간을 만들어 보자

function wrap(func) { //함수받기
    return function () { //함수 리턴받기 이것이 실행됨
        /*여기에 새로운 공간이 생김, 나중에 함수를 실행했을 때 이 부분을 거쳐감*/
        return func.apply(null, arguments);// 위에서 받아 둔 함수를 실행
    }
}

let add = wrap(function (a,b,callback) {
    setTimeout(function () {
        callback(a + b);
    },1000)
});

add(5,10,function (r) {
    console.log(r);
})