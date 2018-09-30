var _ = {};

var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
var isArrayLike = function(list) {
    var length = list && list.length;
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
};
_.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
};
_.keys = function(obj) {
    return _.isObject(obj) ? Object.keys(obj) : [];
};

// function bloop(new_data, body, stopper, is_reduce) {
//     return function(data, iter_predi, opt1) {
//         iter_predi = iter_predi || _.idtt;
//         var result = new_data(data);
//         var memo = is_reduce ? opt1 : undefined;
//         var limiter = is_reduce ? undefined : opt1;
//         var keys = isArrayLike(data) ? null : _.keys(data);
//         var i = -1, len = (keys || data).length; // 이 코드가 위로 올라와 아래가 더 간결해졌다.
//
//         if (is_reduce) {
//             while (++i < len) {
//                 var key = keys ? keys[i] : i;
//                 memo = iter_predi(memo, data[key], key, data);
//                 if (limiter && limiter(memo, data[key], key, data)) break;
//             }
//             return memo;
//         }
//         if (stopper) {
//             while (++i < len) {
//                 var key = keys ? keys[i] : i;
//                 var memo = iter_predi(data[key], key, data);
//                 if (stopper(memo)) return body(memo, result, data[key], key);
//             }
//         } else if (limiter) {
//             while (++i < len) {
//                 var key = keys ? keys[i] : i;
//                 body(iter_predi(data[key], key, data), result, data[key]);
//                 if (limiter == result.length) break;
//             }
//         } else {
//             while (++i < len) {
//                 var key = keys ? keys[i] : i;
//                 body(iter_predi(data[key], key, data), result, data[key]);
//             }
//         }
//         return result;
//     }
// }
_.idtt = _.identity = function(v) { return v; };
_.args0 = _.identity;
_.args1 = function(a, b) { return b; };
_.array = function() { return [] };
_.push_to = function(val, obj) {
    obj.push(val);
    return val;
};
_.noop = function() {};

_.each = bloop(_.identity, _.noop);
_.map = bloop(_.array, _.push_to);

_.values = function(list) {
    return _.map(list, _.identity);
};

/* 3.3 */
_.if = _.safety = _.with_validator = _.planB = function(validator, func, alter) {
    return function() {
        return validator.apply(null, arguments) ?
            func.apply(null, arguments) :
            alter && alter.apply(null, arguments);
    }
};

_.toArray = _.if(Array.isArray, _.idtt, _.values);

_.rest = function(list, num) {
    return _.toArray(list).slice(num || 1);
};
_.rester = function(func, num) {
    return function() {
        return func.apply(null, _.rest(arguments, num));
    }
};
_.reverse = function(list) {
    return _.toArray(list).reverse();
};
_.constant = function(v) {
    return function() {
        return v;
    }
};
_.isNumber = function(a) { return toString.call(a) == '[object Number]'; };
_.push = function(obj, val) {
    obj.push(val);
    return obj;
};
_.not = function(v) { return !v };

_.filter = bloop(_.array, function(b, r, v) { if (b) r.push(v); });
_.reject = bloop(_.array, function(b, r, v) { if (!b) r.push(v); });
_.find = bloop(_.noop, _.rester(_.idtt, 2), _.idtt);
_.findIndex = bloop(_.constant(-1), _.rester(_.idtt, 3), _.idtt);
_.findKey = bloop(_.noop, _.rester(_.idtt, 3), _.idtt);
_.some = bloop(_.constant(false), _.constant(true), _.idtt);
_.every = bloop(_.constant(true), _.constant(false), _.not);
_.reduce = bloop(_.noop, _.noop, undefined, true);

// 0927
_.reduce([1,2,3], function (memo, val, idx, list) {
    return memo + val;
}, 0);

var users = [
    {id : 1, name:"ID", age:32},
    {id : 1, name:"HA", age:25},
    {id : 1, name:"BJ", age:32},
    {id : 1, name:"PJ", age:28},
    {id : 1, name:"JE", age:27},
    {id : 1, name:"JM", age:32},
    {id : 1, name:"HA", age:24}
];
// _.filter _.map  이용
var users2 = _.filter(users, function (user) {
    return user.age >=30;
})

_.map(users2, function (user) {
    return user.name;
});
//_,reduce  만으로 구현

_.reduce(users, function (names, user) {
    if(user.age >=30) names.push(user.name);
    return names;
},[]);

_.reduce(users, function (info, user) {
    var group = user.age - user.age %10;
    info.count[group] = (info.count[group] || 0) + 1;
    info.count[group] = (info.count[group] || 0) + user.age;
    return info;
}, {count:{}, total:{}});
//0929 3.4.5 이전
// function bloop(new_data, body, stopper, is_reduce) {
//     return function (data, iter_predi, opt1) {
//         iter_predi = iter_predi || _.idtt
//         var result = new_data(data);
//         var memo = is_reduce ? opt1 : undefined
//
//         if(isArrayLike(data)) {
//             for(var i = 0, len = data.length; i < len; i++) {
//                 memo = is_reduce ?
//                     iter_predi(memo, data[i], i, data) :
//                     iter_predi(data[i], i, data);
//                     if(!stopper) body(memo, result, data[i], i);
//                     else if (stopper(memo)) return body(memo, result, data[i], i);
//             }
//         }else {
//             for (var i =0, keys = _.keys(data), len = keys.length; i < len ; i++) {
//                 memo =  is_reduce ?
//                 iter_predi(memo, data[keys[i]], keys[i], data) :
//                 iter_predi(data[keys[i]], keys[i], data);
//                 if(!stopper) body(memo, result, data[i], i);
//                 else if (stopper(memo)) return body(memo, result, data[i], i);
//             }
//         }
//         return is_reduce ? memo : result;
//     }
// }
// _.reduce(users, function(names, users){
//     if(users.age > 30) names.push(users.name);
//     return names;
// },[]);

function bloop(new_data, body, stooper, is_reduce) {
    return function (data, iter_predi, opt1) {
        iter_predi = iter_predi || _idtt;
        var result = new_data(data);
        var memo = is_reduce ? opt1 : undefined;
        var limiter = is_reduce ? undefined : opt1;
        var keys = isArrayLike(data) ? null : _.keys(data);
        for(var i = 0, len = (keys || data).length; i < len; i++) {
            var key = keys ? keys[i] : i;
            memo = is_reduce ?
                iter_predi(memo, data[key], key, data) :
                iter_predi(data[key], key, data);
            if(!stooper) body(memo, result, data[key], key);
            else if (stooper(memo)) return body(memo, result, data[key], key);
            if(limiter && limiter == result.length) break;
        }
        return is_reduce ? memo : result;
    }
}
_.reduce = bloop(_.noop, _.noop, undefined, true);
_.each = bloop(_.identity, _.noop);

_.reduce([1,2,3], function (memo, val) {
    return memo + val;
},0)