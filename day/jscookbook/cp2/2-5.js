//함수를 이용해 배열요소를 확인, 조건과 일치한 요소값 치환

var charSets =["ab","bb","cd","ab","dd","cc","ab"];

function replaceElement(element,index,array) {
    if(element == 'ab') {
        array[index] ="**";
    }
}
charSets.forEach(replaceElement);
console.log(charSets);

//querySelecor를 사용해 두 번째 테이블 셀 찾기

var cells = document.querySelectorAll("td + td");

[].forEach.call(cells, function(cell){
    sum += parseFloat(cell.firstChild.data);
})

//10진수를 16진수로된 새로운 배열로 반환

var decArry = [23,255,122,5,16,99];

var hexArry = decArry.map(function(element){//map 에 전달하는 함수는 반드시 첫번째 매개변수가(element) 필요하다.
    return element.toString(16);
})

console.log(hexArry);

// forEach 는 사용할 때 원본을 변경하고 값을 반환하지 않아도 되며 
// map을 사용할 때는 원본을 변경하지 않고 값을 반환해야 한다.


