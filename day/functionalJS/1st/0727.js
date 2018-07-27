var users = [
    {id:1, name:"ID", age:32},
    {id:2, name:"HA", age:25},
    {id:3, name:"BJ", age:32},
    {id:4, name:"PJ", age:28},
    {id:5, name:"JE", age:27},
    {id:6, name:"JM", age:32},
    {id:7, name:"HI", age:24},
];

//앞서 만든것보다 재사용이 가능한 함수로 만들어 봅세 ㅋ

//아이디 찾기
function findById(list, id) {
    for (var i = 0, len = list.length; i < len; i++){
        if(list[i].id == id) return list[i];
    }
}
console.log(findById(users,3));
console.log(findById(users,5));

function findByName(list, name){
    for (var i = 0, len = list.length; i < len; i++){
        if(list[i].name == name) return list[i];
    }
}
console.log(findByName(users,'BJ'));
console.log(findByName(users,'JE'));

function findByAge(list, age) {
    for (var i = 0, len = list.length; i < len; i++){
        if(list[i].age == age) return list[i];
    }
}
console.log(findByAge(users,28));
console.log(findByAge(users,25));

function findBy (key, list, val) {
    for(var i = 0, len = list.length; i < len ; i++) {
        if(list[i][key] === val) return list[i];
    }
}
console.log(findBy('name', users, 'BJ'));

console.log(findBy('id', users, 2));

console.log(findBy('age', users, 28));