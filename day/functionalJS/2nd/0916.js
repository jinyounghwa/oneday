var _ = {};

var MAX_ARRAY_INDEX = Math.pow(2,53) -1;
function getLength(list) {
    return list == null ? void 0 : list.length; // void 0의 결과는 undefined
}
var isArrayLike = function (list) {
    var length = getLength(list);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
};

_.map = function (data, iteratee) {
    var new_list = [];
    if(isArrayLike(data)) {
        for (var i =0, len = data.length; i < len; i++){
            new_list.push(iteratee(data[i], data));
        }
    }else {
        for(var key in data){
            if (data.hasOwnProperty(key)) new_list.push(iteratee(data[key], key, data));
        }
    }
    return new_list;
}
_.map([1,2,3], function (v) {
    return v *2;
})
_.map({a:3, b:2, c:1}, function (v) {
    return v *2;
})
_.identity = function (v) {
    return v;
}
_.idtt = _.identity;
_.values = function (list) {
    return _.map(list, _.identity);
}
console.log(_.values({id:5, name : "JE", age:27}));

_.args0 = _.identity;
_.args1 = function (a,b) {
    return b;
}
_.keys = function (list) {
    return _.map(list, _.args1);
}
console.log(_.keys([3,2,1]));

console.log(_.keys({id : 5, name : "JE", age: 27}));

_.map = function (data, iteratee) {
    var new_list = [];
    if(isArrayLike(data)) {
        for (var i =0, len = data.length; i < len; i++) {
            new_list.push(iteratee(data[i], i, data));
        }
    }else {
        for ( var key in data) {
            if(data.hasOwnProperty(key)) new_list.push(iteratee(data[key], key, data));
        }
    }
    return new_list;
};
_.each = function (data, iteratee) {
    if(isArrayLike(data)){
        for(var i =0 ,len = data.length; i < len; i++){
            iteratee(data[i], i, data);
        }
    }else {
        for(var key in data) {
            if(data.hasOwnProperty(key)) iteratee(data[key], key, data);
        }
    }
    return data;
}
_.each([1,2,3], console.log);

function bloop() {
    return function (data, iteratee) {
        var result = new_data;
        if(isArrayLike(data)) {
            for(var i = 0, len = data.length; i < len;i++){
                body(iteratee(data[i], i, data), result);
            }
        }else{
            for(var key in data) {
                if(data.hasOwnProperty(key))
                    body(iteratee(data[key], key, data), result);
            }
        }
        return result;
    }
}
_.map = bloop(function () {
    return [];
}, function (val, obj) {
    return obj.push;
});
_.each = bloop(function (v) {
    return v;
}, function () {});


// bloop(
//     function (v) {
//         return v;
//     }, function () {}
// )(
//     [5,6,7], function (v) {
//         console.log(v);
//     }
// )

