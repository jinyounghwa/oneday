// 화살표 함수 재귀

function log(arg) {
    console.log(arg);
}
((a,b) => (f => f(f) (f => log(a) || a++ === b || f(f)))) (1,5);

(function (a,b) {
    (function (f) {
        f(f);
    })(function (f) {
        log(a) || a++ || b || f(f);
    });
})(6,10);

((a,b) => (f) => f(f)) (f => log(a) || a++ === b || f(f))(1,5);

// var start = f => f(f);
//
// var logger = (a,b) => start(f => log(a) || a++ === b || f(f));
// logger(6,10);
//
// var start = function (f) {
//     f(f);
// }
// var logger = function (a,b) {
//     start(function (f) {
//         log(a) || a++ = b || f(f);
//     })
// }

logger(1,5);

var each = (arr, iter, i=0) => start(f => iter(arr[i]) || ++i < arr.length && f(f));

each([5,4,3,2,1], function (v) {
    console.log(v);
})

each(['a','b','c'], function (v) {
    console.log(v);
})