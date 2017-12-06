var sentence = 'this is one sentence. this is a sentence with a list of items:' + 'cherries, orages, apples, bnanas. that was the list of items.';

var start = sentence.indexOf(':');
var end = sentence.indexOf('.', start+1);
var listStr = sentence.substring(start+1,end);

var fruits = listStr.split('\/s*,/s*/');


// substring :  일정 좌표의 문자열을 반환한다. 괄호안은 위치값이다.
// indexOf : arr.indexOf(searchElement:검색하는원소, fromIndex:시작위치) 

fruits.forEach(function(elmnt, indx, arry){
    arry[indx] = elmnt.trim();
})

console.log(fruits);

// trim : 호출된 원래의 문자열 양끝에서 공백을 제거한 새로운 문자열 반환

// 코드를 체이닝을 이용하여 단순화


// var fruits = sentence.substring(start+1,end).split(".");