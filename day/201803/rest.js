function pick(object, ...keys) {
    let result = Object.create(null);

    for (let i = 0; len = key.length; i++) {
        result[keys[i]] = object[keys[i]];
    }
    return result;
}

//나머지 매개변수의 제한 - 나머지 매개변수는 반드시 하나이여야 한다. 마지막위치에서 사용해야 한다 다음은에러다

// function pick1 (object, ... keys, last) {
//     let result = Object.create(null);

//     for (let i = 0; len = key.length; i++) {
//         result[keys[i]] = object[keys[i]];
//     }
//     return result;
// }

//setter 에는 나머지 매개변수를 사용할 수 없다.

// let object = {
//     //문법에러 
//     set name(...value){
//         //동작정의
//     }
// }
//arguments 객체는 함수를 호출 할 때 전달한 인자는 그대로 반영하여 나머지 매개변수와 함께 잘 동작한다.

function checkArgs(...args){
    console.log(args.length);
    console.log(arguments.length);
    console.log(args[0], arguments[0]);
    console.log(args[1], arguments[1]);
}
checkArgs("a","b");

//배열에서 가장 큰 값을 찾으려고 할 때

let values = [25, 50, 75, 100];
console.log(Math.max(...values));

//Math.max에서 가장 작은 값이 0 이길 원한다고 할 때 별도의 인자를 전달 하여 비교 할 수 있음

let values1 = [-25, -50, -100];
console.log(Math.max(...values1, 0));