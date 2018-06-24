//set & map

// let set = new Set();

// set.add(5);
// set.add("5");

// console.log(set.size);

//요소제거하기

let set = new Set();

set.add(5);
set.add("5");

console.log(set.has(5));

set.delete(5);

console.log(set.has(5));
console.log(set.size);

set.clear();

console.log(set.has("5"));
console.log(set.size);
