var numbers = [0,1,2,3,4,5,6,7,8,9];
numbers[numbers.length] = 10;
numbers.push(11);
numbers.push(12,13);

//배열 앞부분에 새 원소를 추가 1. 기존 원소들을 모두 우측으로 이동한다 2. 마지막에 새로운값을 (-1) 첫번째 위치에 할당한다.
// for (var i=numbers.length;i>=0;i--){
//     numbers[i] = numbers[i-1];
//     //for 문이 없을 때는 0의 위치에 덮어 쓴다. 
// }
numbers[0] = -1;

numbers.unshift(-2);
numbers.unshift(-4,-3);

for (var i=0; i<numbers.length; i++) {
    numbers[i] = numbers[i-1];
}