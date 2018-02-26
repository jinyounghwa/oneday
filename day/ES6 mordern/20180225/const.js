// let name = "nicholas",
//     message = `hello ${name}.`;

// console.log(message);

function passthru(literlas, ...substitutions){
    let result = "";
    //치환자의 수 만큼 반복수행
    for(let i =0; i < substitutions.length; i++){
        result += literlas[i];
        result += substitutions[i];
    }
    //마지막 리터럴 추가
    result += literlas[literlas.length -1];
    return result;
}
let count = 10, price = 0.25, message = passthru`${count} items cost $${(count *price).toFixed(2)}.`;

console.log(message);