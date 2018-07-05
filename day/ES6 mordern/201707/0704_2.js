//제너레이터 return문

// function *createIterator(){
//     yield 1;
//     return 42;
// }
// let iterator = createIterator();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

//제너레이터 위임하기 - 두개의 이터레이터 값을 하나로 합칠 때

function *createNumberIterator(){
    yield 1;
    yield 2;
    return 3;
}

function *createRepeatingIterator(count) {
    for (let i=0; i < count; i++) {
        yield "repeat";
    }
}

function *createCombinedIterator(){
    let result = yield *createNumberIterator();
    yield result;
    yield *createRepeatingIterator(result);
}

var iterator = createCombinedIterator();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

