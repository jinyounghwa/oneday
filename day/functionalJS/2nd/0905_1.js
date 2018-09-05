// 비동기와 재귀

function _async(func) {
    return function () {
        arguments[arguments.length++] = function (result) {
            _callback(result);
        };
        (function wait(args) {
            for(var i =0; i < args.length; i++)
                if(args[i] && args[i].name == '_async_cb_receiver')
                    return args[i](function (arg) {
                        args[i] = arg;
                        wait(args);
                    })// 재귀함수
            func.apply(null, args);
        })(arguments);

        var _callback;
        function _async_cb_receiver(callback) {
            _callback = callback;
        }
        return _async_cb_receiver;
    };
}
var add = _async(function (a, b, callback) {
    setTimeout(function () {
        console.log('add', a, b);
        callback(a + b);
    },1000);
});
var sub = _async(function (a,b,callback) {
    setTimeout(function () {
        console.log('sub', a, b);
        callback(a-b);
    },1000);
})

var div = _async(function (a,b,callback) {
    setTimeout(function () {
        console.log('div', a, b);
        callback(a/b);
    },1000);
});

var log = _async(function (val) {
    setTimeout(function () {
        console.log(val);
    }, 1000)
});

log(div(sub(10,15,),5),10);

log(add(10,10),sub(10,5));

