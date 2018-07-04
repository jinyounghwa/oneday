// 제네러이터를 쓸대 next() 매서드에 인자를 전달 할 수 있음.. 당연히 그래야 하지 않나?

function *createIterator() {
    let first = yield 1;
    let secound = yield first + 2 // 4+2 처음에는 멈추고 있다가 두번째실행, next에서 4값에 first에 할당
    yield secound + 3; // 5+3 
}

let iterator = createIterator();

console.log(iterator.next());
console.log(iterator.next(4));
console.log(iterator.next(5));
console.log(iterator.next());

//두개의 인자만 받게 됨. 추가로 받으면 undefined, 처음받은 4는 first로 두번째 받은것은 secound로 들어감
//호출한다고 무작정 first로만 인자가 들어가난것이 아님 이게 헷갈렷었음..