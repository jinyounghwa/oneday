//인자를 넘기면서 실행하는 부분과 결과 실행하는 부분 분리
function _async(func) {
    return function () {
        arguments[arguments.length++] = function (result) {
            _callback(result);
        };
        func.apply(null, arguments);

        var _callback;
        function _async_cb_recevier(callback) {
            _callback = callback;
        }
        return _async_cb_recevier;
    };
}
var add = _async(function (a, b, callback) {
    setTimeout(function () {
        callback(a + b);
    },1000);
});
var sub = _async(function (a,b,callback) {
    setTimeout(function () {
        callback(a-b);
    },1000);
})

var div = _async(function (a,b,callback) {
    setTimeout(function () {
        callback(a/b);
    },1000);
});

add(10,15)(function (a) {
    sub(a,5)(function (a) {
        div(a,10)(function (r) {
            console.log(r);
        })
    })
})