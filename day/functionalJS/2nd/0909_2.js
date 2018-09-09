var users = [
    {id : 1, name:"ID", age:32},
    {id : 2, name:"HA", age:25},
    {id : 3, name:"BJ", age:32},
    {id : 4, name:"PJ", age:28},
    {id : 5, name:"JE", age:27},
    {id : 6, name:"JM", age:32},
    {id : 7, name:"HI", age:24}
]

_.pluck(users, 'name');

_.first([5,4,3,2,1]);

_.filter(
    _.map([1,2,3], function (n) {
        return n * 2;
    }), function (n) {
        return n <=4;
    }
)

_.chain([1,2,3].map(function (n) {
    return n * 2;}).filter(function () {
    return n <= 4;}).value();