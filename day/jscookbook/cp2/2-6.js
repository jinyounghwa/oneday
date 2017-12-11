//필터링 된 배열

var charSets =["ab","bb","cd","ab","dd","cc","ab"];

var newArry = charSets.filter(function(element){
    return (element !=="**")
})
console.log(newArry);

// 배열 콘텐츠 유효성 검사

function testValue (element, index, array){
    var textExp = /^[a-zA-Z]+$/;
    return textExp.test(element);
}

var elemSet = ["**", 123, "aaa", "abc", "-", 46, "AAA"];

// 유효한지 테스트 실행

var result = elemSet.every(testValue);

console.log(result); //false

var elemSet2 = ["elephant", "lion", "cat", "dog"];

result = elemSet2.every(testValue);

console.log(result); //true

// every 는 false반환하면 종료, some는 true를 반환하면 종료
