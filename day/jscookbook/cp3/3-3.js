//재귀로 배열을 검색하고 배열 요소값의 문자열을 역순으로 반환하는 함수

var reverseArray = function(x,indx,str){
    return indx == 0 ? str : reverseArray(x,--indx,(str+=""+x[indx]));
}
var arr = ['apple', 'orange', 'peach', 'lime'];
var str = reverseArray(arr, arr.length, "");
console.log(str);

var arr2 = ['car','boat', 'sun', 'computer'];
str =reverseArray(arr2, arr2.length,""); 
console.log(str);