function bloop(new_data, body) {
    return function (data, iteratee) {
        var result = new_data(data);
        if(isArrayLike(data)) {
            for (var i =0,len = data.length; i < len; i++) {
                body(iteratee(data[i], i, data), result);
            }
        }else {
            for(var i = 0, keys = _.keys(data), len = keys.length; i < len; i++) {
                body(iteratee(data[keys[i]], keys[i], data), result);
            }
        }
        return result;
    }
}
_.map = bloop(_.array, _.push_to);
_.each = bloop(_.identity, _.noop);

_.map({a:3, b:2, c:1}, function (v) {
    return v *2
});