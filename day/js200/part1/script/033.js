const symbol = Symbol();
const hello = Symbol('hello');

console.log(Number(3) === Number(3));
console.log(Symbol('Symbol') === Symbol('symbol'));
console.log(Symbol() === Symbol());
console.log(typeof Symbol());

const nationility = Symbol('nationility');

const user = {
    name : 'jay'

};


user[nationility] = 'korean';
console.log(user[nationility]);

// user[gi] = 'gi';
// console.log(user[gi]);

for (let key in user) {
    console.log(key);
    console.log(user);
}
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));
console.log(JSON.stringify(user));

const symbolProperties = Object.getOwnPropertySymbols(user);
console.log(symbolProperties);
console.log(user[symbolProperties[0]]);
// 심볼은 객체의 키로 함수 호출시 값을 전달하지만 키를 숨기고 싶을때 사용