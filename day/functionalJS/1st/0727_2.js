var users = [
    {id:1, name:"ID", age:32},
    {id:2, name:"HA", age:25},
    {id:3, name:"BJ", age:32},
    {id:4, name:"PJ", age:28},
    {id:5, name:"JE", age:27},
    {id:6, name:"JM", age:32},
    {id:7, name:"HI", age:24},
]

var users2 = [
    new User(1,"ID",32),
    new User(2,"HA",25),
    new User(3,"BJ",32),
    new User(4,"PJ",28),
    new User(5,"JE",27),
    new User(6,"JM",32),
    new User(7,"HI",24)
]
function User(id, name, age){
    this.getId = function(){
        return id;
    };
    this.getName = function(){
        return name;
    }
    this.getAge = function(){
        return age;
    }
}
function filter(list, predicate) {
    var new_list =[];
    for (var i = 0, len = list.length; i < len; i++){
        if(predicate(list[i])) new_list.push(list[i]);
    }
    return new_list;
}

function map(list, iteratee) {
    var new_list =[];
    for (var i =0, len = list.length; i < len ; i++) {
        new_list.push(iteratee(list[i]));
    }
    return new_list;
}

// var user_under_30 = filter(users, function(user){
//     return user.age < 30;
// })
// console.log(user_under_30.length);

// var ages = map(user_under_30, function(user){
//     return user.age;
// })
// console.log(ages);

// var user_over_30 = filter(users, function(user){
//     return user.age >= 30;
// })
// console.log(user_over_30.length);

// var names = map(user_over_30, function(user){
//     return user.name;
// })
// console.log(names);

function bmatch1(key, val){
    return function(obj) {
        return obj[key] === val;
    }
}

console.log(find(users, bmatch1('id',1)));

console.log(filter(users,bmatch1('age', 32)));

console.log(map(users, bmatch1('age',32)));

function object(key, val) {
    var obj = {};
    obj[key] = val;
    return obj;
}
function match(obj, obj2) {
    for (var key in obj2) {
        if (obj[key] !== obj2[key]) return false;
    }
    return true;
}
function bmatch(obj2, val) {
    if(arguments.length == 2) obj2 = object(obj2, val);
    return function(obj){
        return match(obj, obj2);
    }
}
console.log(
    match(find(users, match('id', 3)), find(users, bmatch('name','bj')))
);
console.log(find(users, function(u){return u.age == 32 && u.name =='JM'}));

console.log(find(users, bmatch({name:"JM", age:32})));
//find를 단독으로 쓸 때 flase가 나온다. 책하고 다름.. 


function findIndex(list,predicate) {
    for (var i=0, len=list.length; i < len; i++) {
        if(predicate(list[i])) return i
    }
    return -1
}

console.log(findIndex(users, bmatch({name:"JM", age:32})));

console.log(findIndex(users, bmatch({age:36})));

_map = function(list, iteratee){
    var new_list = [];
    for (var i=0, len=list.length; i < len ; i++) {
        new_list.push(iteratee(list[i], i, list))
    }
    return new_list;
};

_filter = function(list, predicate){
    var new_list = [];
    for (var i = 0, len = list.length; i< len; i++){
        if(predicate(list[i], i,list)) new_list.push(list[i])
    }
    return new_list;
}
_find = function(list, predicate){
    for (var i =0, len = list.length; i < len; i++){
        if(predicate(list[i], i, list)) return list[i]
    }
}
_findIndex = function(list,predicate){
    for (var i =0, len = list.length; i < len; i++){
        if(predicate(list[i], i, list)) return i
    }
    return -1;
}
console.log(_filter([1,2,3,4], function(val, idx){
    return idx > 1;
}))

console.log(_filter([1,2,3,4], function(val, idx){
    return idx % 2 ==0;
}))