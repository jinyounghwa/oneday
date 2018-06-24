//weak Set -  모든 참조가 사라지면 Set참조도 사라지도록하여 메모리 누수를 예방

let set = new WeakSet(), key ={};

//Set에 객체 추가

set.add(key);

console.log(set.has(key));

set.delete(key);

console.log(set.has(key));

