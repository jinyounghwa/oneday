// 심벌 사용하기 - 새로운 프로퍼티를 할당 할 때

let firstName = Symbol("first name");

//계산된 객체 리터럴 프로퍼티에 사용

let person = {
    [firstName] : "Jin"
};

//프로퍼티를 읽기 전용으로 만듦
Object.defineProperty(person, firstName, {writable:false});

let lastName = Symbol("last name");

Object.defineProperties(person,{
    [lastName] : {
        value:"younghwa",
        writable:false
    }
});
console.log(person[firstName]);
console.log(person[lastName]);

