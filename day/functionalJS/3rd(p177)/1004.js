_.compose(console.log, function (a) {
    return a -2
}, function (a) {
    return a +5
})(0);

var falsy_values = _.compose(_.partial(_.isEqual,-1),_.partial(_.findIndex,_,_.identity));

console.log(falsy_values([1,true,{}]));

