//템플릿 리터럴에서 원본값 사용하기 

function raw(literals, ...substitutions){
    let result = "";

    //치환자의 개수만큼 반복수행
    for(let i = 0; i< substitutions.length; i++){
        //원본 문자열을 대신 사용
        result += literals.raw[i];
        result += substitutions[i];
    }
    //마지막 리터럴 추가
    result += literals.raw[literals.length -1];
    return result;
}
let message = raw`Multiline\nstring`;

console.log(message);
console.log(message.length);