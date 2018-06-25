//Set 타입과 WeakSet 차이점 - 참조 유지 필요성

let set = new WeakSet(), key = {};

//Set에 객체 추가

set.add(key);

console.log(set.has(key));

// key의 마지막 강한 참조를 제거(또한 Weak Set으로부터 제거됨)

key = null;

//WeakSet 는 이터러블이 아니므로 for-of 반복문에서 사용될 수 없다.
//forEach 사용불가
// size 프로퍼티 없음
