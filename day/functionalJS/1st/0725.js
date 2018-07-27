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

var user_under_30 = filter(users, function(user){
    return user.age < 30;
})
console.log(user_under_30.length);

var ages = map(user_under_30, function(user){
    return user.age;
})
console.log(ages);

var user_over_30 = filter(users, function(user){
    return user.age >= 30;
})
console.log(user_over_30.length);

var names = map(user_over_30, function(user){
    return user.name;
})
console.log(names);

console.log(
    map(
        filter(users, function(u){return u.age >=30}),
        function(u) {return u.name}
    )
)

console.log(
    map(
        filter(users2, function(u){return u.getAge() > 30}),
        function(u){return u.getName();}
    )
)