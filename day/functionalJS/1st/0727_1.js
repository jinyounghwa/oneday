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
function log_length(value){
    console.log(value.length);
    return value;
}

function map(list, iteratee) {
    var new_list =[];
    for (var i =0, len = list.length; i < len ; i++) {
        new_list.push(iteratee(list[i]));
    }
    return new_list;
}

var ages = map(filter(users,function(user){
    return user.age < 30;
}),
    function(user) {
        return user.age;
    }
)
var users2 = [
    new User(1,"ID",32),
    new User(2,"HA",25),
    new User(3,"BJ",32),
    new User(4,"PJ",28),
    new User(5,"JE",27),
    new User(6,"JM",32),
    new User(7,"HI",24)
]
var users = [
    {id:1, name:"ID", age:32},
    {id:2, name:"HA", age:25},
    {id:3, name:"BJ", age:32},
    {id:4, name:"PJ", age:28},
    {id:5, name:"JE", age:27},
    {id:6, name:"JM", age:32},
    {id:7, name:"HI", age:24},
]
function findBy (key, list, val) {
    for(var i = 0, len = list.length; i < len ; i++) {
        if(list[i][key] === val) return list[i];
    }
}
console.log(findBy('name', users2, 'BJ'));

function find(list, predicate) {
    for(var i =0, len = list.length; i < len; i++) {
        if(predicate(list[i])) return list[i]
    }
}

console.log(find(users2, function(u){return u.getAge() == 25}).getName());
console.log(find(users, function(u){return u.name.indexOf('P') != -1;}));
console.log(find(users, function(u){return u.age == 32 && u.name == 'JM'}));
console.log(find(users2, function(u){return u.getAge() < 30;}).getName());


