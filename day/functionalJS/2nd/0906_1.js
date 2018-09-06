//화살표 함수
//익명함수와 문법 비교

var add = function (a,b) {
    return a + b;
}

var add = (a,b) => a+b;

// 두줄 이상의 함수를 화살표 함수로

var add2 = function (a,b) {
    var result = a +b;
    return result;
}

var add2 = (a,b) =>{
    var result = a +b;
    return result;
}

//인자가 없는 함수

var hi = function () {
    console.log('hi');
}
var hi = () => console.log('hi');

//익명함수와 기능 비교

(function () {
    console.log(this, arguments);
    (()=>{
        console.log(this,arguments);
    })
    (()=>{
        console.log(this,arguments);
    })();
    (()=>{
        console.log(this,arguments);
    })();
}).call({hi:1},1,2,3)

[1,2,3].map(function (v) {
    return v *2;
})
[1,2,3].map(v => v*2);