//배열 일부 추출

var animals = ['elephant', 'tiger', 'lion', 'zebra', 'cat', 'dog', 'rabbit', 'goose'];

var domestic = animals.slice(4,7);

console.log(domestic);

var mArray = [];
mArray[0] = ['apple', 'pear'];
mArray[1] = ['strawberry', 'lemon'];
mArray[2] = ['lime', 'pech', 'berry'];

var nArray = mArray.slice(1,2);
console.log(mArray[1]);

nArray[0][0] = 'raspberry';
console.log(nArray[0]);
console.log(mArray[1]);
//slice() 매서드는 배열요소가 객체라면 원래 배열과 복사한 배열 둘다 동일한 객체를 가르키므로 둘다 반영되지만
//배열요소가 문자열이나 숫자나 같은 원시데이테 유형이라면 값 자체로 복사되기 때문에 (참조) 변경해도 원래배열에는 반영안됌
