//이름이 다른 지역변수에 할당- 구조분해

let node = {
    type : "Identifier",
    name : "foo"
};

let {type : localType, name:localName} = node;

console.log(localName);
console.log(localType);