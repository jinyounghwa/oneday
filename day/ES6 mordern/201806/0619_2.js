//전역으로 심벌을 사용

let uid = Symbol.for("uid");

let object = {
    [uid] : "12345"
};

console.log(object[uid]);
console.log(uid);

let uid2 = Symbol.for("uid");

console.log(uid === uid2);
console.log(object[uid2]);
console.log(uid2);