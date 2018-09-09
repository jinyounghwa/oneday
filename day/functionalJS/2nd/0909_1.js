//underscore.js 를 간단히 써 보기

// _.each([1,2,3], function (val, idx, list) {
//     console.log(val,idx,list);
// })

// [1,2,3].forEach(function (val, idx, list) {
//     console.log(val,idx,list);
// })

var list = [1,2,3,4,5,6];
_.reject(list, function (num) {
    return num % 2 == 0;
})
console.log(list);

_.contains([1,2,3],3);

_.isArray([1,2,3]);

