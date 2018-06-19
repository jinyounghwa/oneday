//심벌(비공개객체멤버)을 공유하여 보자 - 언제든지 접근할 수 있는 전역 심벌 저장소를 제공

//심벌이 공유될 때 Symbol.for 매서드를 사용하면 심벌을 위해 문자열 식별자 하나를 매개변수로 둔다.

let uid = Symbol.for("uid");

let object = {};

object[uid] = "12345";
console.log(object[uid]);
console.log(uid);


