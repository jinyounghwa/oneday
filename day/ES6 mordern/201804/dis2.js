// =(등호) 로 기본값을 표시한다.

let node = {
    type : "idetifier",
    name : "foo"
};

let {type, name, value = true} = node;

console.log(type);
console.log(name);
console.log(value);