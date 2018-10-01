//한번만 실행하는 함수
// var hi = _.once(function () {
//     console.log('hi');
// })

// _.once = function (func) {
//     var flag, result;
//     return function () {
//         if(flag) return result;
//         flag = true;
//         return result = func.apply(this, arguments);
//     }
// };
// var a = _.once(function () {
//     console.log("A");
//     return "B";
// })
// console.log(a());
// console.log(a());
// function skip(body) {
//     var yes;
//     return function () {
//         return yes || (yes = body.apply(null, arguments));
//     }
// }
function idMaker() {
    return function (start) {
        return ++start;
    }
}
var  messagecid = idMaker(0);

var postCid = idMaker(11);