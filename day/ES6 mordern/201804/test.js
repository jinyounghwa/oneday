function mixin(recever, supplier){
    Object.keys(supplier).forEach(function(key){
        recever[key] = supplier[key]
    });
    return recever;
}
//mixin 함수는 상속없이 recever에 새로운 프로퍼티를 추가할 수 있다.

function EventTarget(){/*...*/};
EventTarget.prototype = {
    constructor : EventTarget,
    emit : function(){/*...*/},
    on : function(){/*...*/}
};
var myObject = {};
mixin(myObject, EventTarget.prototype);

myObject.emit("somethintChanged");

//mixin 함수는 할당 연산자(=)를 사용하기 때문에 프로퍼티 접근자(점 표기법)으로 할수 없어서 
//Object.assingn()을 쓴다.
function EventTarget(){/*...*/};
EventTarget.prototype = {
    constructor : EventTarget,
    emit : function(){/*...*/},
    on : function(){/*...*/}
};
var myObject = {};
object.assign(myObject, EventTarget.prototype);

myObject.emit("somethintChanged");

//Object.assingn()은 다수의 공급자를 받고 수신자는 순차적으로 프로퍼티를 받는다. 첫번째 공급자를 받은 후 
//두번째 수신자가 덮어 쓸 수 있다는 소리다.

var recever = {};
Object.assign(recever,{
    type: "js",
    name : "file.js"
},
{
    type : "css"
}
);
console.log(recever.type); //"css"; js가 아니라 두번째로 덮어 써 져서 css 다
console.log(recever.name); //"file.js";