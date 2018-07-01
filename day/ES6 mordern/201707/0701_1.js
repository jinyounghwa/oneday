//제너레이터 - 이터레이터를 반환하는 함수

// function *createIterator() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// //제너레이터는 보통의 함수처름 호출되지만 이터레이터를 반환한다.

// let iterator = createIterator();

// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

function *createIterator(items) {
    for(let i = 0; i < items.length; i++) {
        yield items[i];
    }
}
let iterator = createIterator([1,2,3]);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//이후 모두 호출
console.log(iterator.next());