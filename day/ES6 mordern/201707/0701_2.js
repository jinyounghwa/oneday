//제너레이터 함수 표현식

// let createIterator = function *(items) {
//     for(let i =0; i<items.length; i++) {
//         yield items[i];
//     }
// };

// let iterator = createIterator([1,2,3,4]);

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

//제네레이터도 함수이기 때문에 객체에 추가 할 수 있다.

var o = {

    *createIterator (items){
        for(let i =0; i<items.length; i++) {
            yield items[i];
        }
    }
}

let iterator = o.createIterator([1,2,3,4]);

console.log(iterator.next());