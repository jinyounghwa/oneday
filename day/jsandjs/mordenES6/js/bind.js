// 고민없이 처음부터 key를 순회하자 나머지 매개변수를 사용하여

function pick(object, ...keys) {
    let result = Object.create(null);

    for(let i =0, len = keys.length; i < len; i++) {
        result[keys[i]] = object[keys[i]];
    }
    return result;
}

//전개연산자는 나머지 매개변수와 다르다. 변수에 사용될 때와 함수에 사용될 때를 잘 구분하자

let values = [25, 50, 75, 100]

console.log(Math.max(...values));

// 전개 연산자는 다른 인자와 같이 사용할 수 있다.
let values1 = [-25, -50, -75, -100]

console.log(Math.max(...values1, 0));