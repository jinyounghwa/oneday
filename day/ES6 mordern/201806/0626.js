//Weak Map - Weak Set와 같이 참조가 지워져도 자동으로 제거 (메모리 누수 방지)

// let map = new WeakMap(), element = document.querySelector(".element");

// map.set(element, "Original");

// let value = map.get(element);
// console.log(value);

// //엘리먼트 제거
// element.parentNode.removeChild(element);
element = null;
//여기서 Map 는 비어있는상태

//초기화 될 때는 생성자에 배열들의 배열을 전달해야 한다.

let key1 = {}, key2 = {}, map = new WeakMap([[key1,"hello"],[key2,"42"]]);

console.log(map.has(key1));
console.log(map.get(key1));
console.log(map.has(key2));
console.log(map.get(key2));

//get(),has() 는 WeakMap 키를 이용해서 접근 할 수 있다.