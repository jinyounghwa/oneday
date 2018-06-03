//object.is()매서드 - 등호 세개(===) 보다 정확하게 객체비교

//Object.assign() - mixin과는 비슷하나 할당 연산자(=)를 사용할 수 있는 패턴 

function EventTarget(){/*...*/};

EventTarget.prototype = {
    constructor : EventTarget,
    emit:function() {/*...*/},
    on:{/*...*/}
}

var myObject = {};
Object.assign(myObject, EventTarget.prototype);

myObject.emit("somethingChanged");


//덮어쓰기도 가능 (type) 가 js-> css 로 덮어씀ㄴ
var reciver = {};

Object.assign(reciver,

{
    type:"js",
    name : "file.js"
},
    {
        type:"css"
    }
);

console.log(reciver.type);
console.log(reciver.name);