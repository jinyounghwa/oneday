// 함수를 인자로 받아 대신실행

// function callWith10(val, func) {
//     return func(10, val);
// }
// function add(a, b) {
//     return a + b;
// }
// function sub(a, b) {
//     return a - b;
// }
// callWith10(20, add);
// callWith10(5, sub);
//
function  callWith(val1){
    return function (val2, func) {
        return func(val1, val2);
    }
}
var callWith10 = callWith(10);
var cawllWith5 = callWith(5);


callWith([1,2,3])(function (v) {
    return v * 10
},_.map);

_.get = function (list, idx) {
    return list[idx];
}
var callwidthUsers = callWith([
    {id:1, name:"HA", age:25},
    {id:2, name:"PJ", age:28},
    {id:3, name:"JE", age:27}
]);

callwidthUsers(2,_.get);

callwidthUsers(function (user) {
    return user.age > 25;
},_.find);

callwidthUsers(function (user) {
    return user.age > 25;
}, _.filter);

callwidthUsers(function (user) {
    return user.age > 25;
},_.some);

callwidthUsers(function (user) {
    return user.age > 25;
},_.every);

Function.prototype.partial = function () {
    var fn = this, args = Array.prototype.slice.call(arguments);
    return function () {
        var arg = 0;
        for(var i = 0; i < arg.length && arg < arguments.length; i++){
            if(arg[i] === undefined) arg[i] = arguments[arg++];
            return fn.apply(this.args)
        }
    }
}
function abc(a,b,c) {
    console.log(a,b,c);
}
var ac = abc.partial(undefined,'b',undefined);
ac('a','c');

var ac = _.partial(abc, _, 'b');
ac('a','c');

var bj = {
    name : "BJ",
    greet: _.partial(function (a,b) {
        return a + this.name + b;
    }, "저는", "입니다.")
};
bj.greet();

var greetPJ = bj.greet.bind({name"PJ"}); // bind는 새로운 함수를 리턴함
greetPJ();