// 상용심벌과 내부 연산자 노출하기

// Symbol.hasInstance - 객체의 상속을 확인하기 위해 instanceof에 의해 사용되는 메서드



function MyObject() {
    //..
}
Object.defineProperty(MyObject, Symbol.hasInstance,{
    value:function(v){
        return false;
    }
});

let obj = new MyObject();

console.log(obj instanceof MyObject);



