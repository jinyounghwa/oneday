//객체선언
const obj = {b:2,c:3,d:4};

//해체할당
const {a,b,c} = obj;

a;
b;
c;
//d;

// 확산연산자 (...) 남은 요소를 새 배열에 모두 할당 할 수 있다. 
const arr = [1,2,3,4,5];

let [x,y, ...rest] = arr;
