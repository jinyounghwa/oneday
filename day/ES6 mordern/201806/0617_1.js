//나머지 요소
let colors = ["red", "green", "blue"];

let [firstColor, ...restColors] = colors;

console.log(firstColor);
console.log(restColors.length);
console.log(restColors[0]);
console.log(restColors[1]);

//혼합한 구조분해

let node = {
    type : "Identifier",
    name : "foo",
    loc:{
        start : {
            line : 1,
            colum: 1
        },
        end : {
            line : 1,
            colum : 4
        }
    },
    range : [0,3]
};
let {
    loc : {start},
    range :[startIndex]
} = node;

console.log(start.line);
console.log(start.colum);
console.log(startIndex);
console.log(node.type);
console.log(node.loc.start.line);