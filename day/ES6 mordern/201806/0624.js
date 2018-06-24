// set 에서의 forEach() 메서드

// Set 에는 키가 없으며, 첫번째와 두번째 인자에 같은값을 전달한다. 일반적인 forEach()와 이런 차이를 보인다.

let set = new Set([1, 2]);

set.forEach(function(value, key, owenrSet){
    console.log(key + " " + value);
    console.log(owenrSet === set);
})

//set을 배열로 변환하기 (전개연산자 ... ) 사용

let aset = new Set([1,2,3,4,5]), array = [...aset];

console.log(array);

//set 는 중복을 제거하고 그 다음 각요소들을 전개연산자로 새로운 배열로 위치하게 함

function elementDuplicates(items) {
    return [... new Set(items)];
}
let numbers = [1,2,3,3,3,4,5];
    noDuplicates = elementDuplicates(numbers);

console.log(noDuplicates);