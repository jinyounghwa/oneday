var users = [
    {id:1, name:"ID", age:32},
    {id:2, name:"HA", age:25},
    {id:3, name:"BJ", age:32},
    {id:4, name:"PJ", age:28},
    {id:5, name:"JE", age:27},
    {id:6, name:"JM", age:32},
    {id:7, name:"HI", age:24},
]

var temp_users = [];
for (var i =0, len = users.length; i < len; i++){
    if(users[i].age < 30) temp_users.push(users[i]);
}

console.log(temp_users.length);

// var ages = [];
// for (var i=0, len=temp_users.length; i < len; i++){
//     ages.push(temp_users[i].age);
// }
// console.log(ages);

// var temp_users = [];
// for (var i =0, len = users.length; i < len; i++){
//     if(users[i].age >= 30) temp_users.push(users[i]);
// }

// console.log(temp_users.length);

// var names =[];
// for(var i=0, len=temp_users.length; i < len; i++){
//     names.push(temp_users[i].name);
// }

// console.log(names);

function filter(list, predicate) {
    var new_list =[];
    for (var i = 0, len = list.length; i < len; i++){
        if(predicate(list[i])) new_list.push(list[i]);
    }
    return new_list;
}

var users_under_30 = filter(users, function(user){
    return user.age < 30
})
console.log(users_under_30);

var ages = [];
for(var i = 0, len = users_under_30.length; i< len; i++) {
    ages.push(users_under_30[i].age);
}
console.log(ages);

var users_over_30 = filter(users, function(user){
    return user.age >=30
});
console.log(users_over_30.length);