// var pc = _.partial(console.log,1)
//
// pc(2);

var add_all = _.partial(_.reduce,_, function (a,b) {
    return a + b;
})

// add_all([1,2,3,4]);

var method = function (obj, method) {
    return obj[method].apply(obj, _.rest(arguments,2));
};
var push = _.partial(method, _, 'push');
var shift = _.partial(method, _, 'shift');

var a = [1,2];
push(a,3);