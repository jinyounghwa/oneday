// 전역심벌저장소에서 Symbol.keyFor() 을 사용하여 심벌과 관련된 키를 탐색함

let uid = Symbol.for("uid");

console.log(Symbol.keyFor(uid));

let uid2 = Symbol.for("uid");

console.log(Symbol.keyFor(uid2));

let uid3 = Symbol("uid");
console.log(Symbol.keyFor(uid3))