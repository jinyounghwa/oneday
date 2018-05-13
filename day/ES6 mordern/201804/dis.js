// let node = {
//     type : "Indenttifier",
//     name : "foo"
// }
// let {type, name} = node;// 이렇게 쓰면 점 표기법을 사용할 필요가 없다.

// console.log(type);
// console.log(name);

//구조분해 할당.(변수에 값을 할당 할 때 사용할 수 있다.)

let node = {
    type : "Indenttifier",
    name : "foo"
},
type = "Literal",
name = 5;

function outputInfo(value){
    console.log(value === node);
}

outputInfo({type, name} = node);

console.log(type);
console.log(name);
  