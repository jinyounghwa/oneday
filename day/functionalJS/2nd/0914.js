// function fnc1(data) {
//     var keys = _.keys(data);
//     for(var i =0; i < keys.length; i++) {
//         //루프를 돌지 않음
//     }
// }
// fnc1(null);

// _.map = function (list, iteratee) {
//     var new_list = [];
//     for (var i =0 len = list.length; i < len; i++){
//         new_list.push(iteratee(list[i], i , list));
//     }
//     return new_list;
// }

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