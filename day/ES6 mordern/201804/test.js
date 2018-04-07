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