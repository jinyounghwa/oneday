var ___ = {};
_.partial = function(fn) {
    var args1 = [], args3, len = arguments.length, ___idx = len;
    for (var i = 1; i < len; i++) {
        var arg = arguments[i];
        if (arg == ___ && (___idx = i) && (args3 = [])) continue;
        if (i < ___idx) args1.push(arg);
        else args3.push(arg);
    }
    return function() { return fn.apply(this, mergeArgs(args1, arguments, args3)); };
};
function _toUndef(args1, args2, args3) {
    if (args2) args1 = args1.concat(args2);
    if (args3) args1 = args1.concat(args3);
    for (var i = 0, len = args1.length; i < len; i++) if (args1[i] == _) args1[i] = undefined;
    return args1;
}
function mergeArgs(args1, args2, args3) {
    if (!args2.length) return args3 ? _toUndef(args1, args3) : _toUndef(args1.slice());
    var n_args1 = args1.slice(), args2 = _.toArray(args2), i = -1, len = n_args1.length;
    while (++i < len) if (n_args1[i] == _) n_args1[i] = args2.shift();
    if (!args3) return _toUndef(n_args1, args2.length ? args2 : undefined);
    var n_arg3 = args3.slice(), i = n_arg3.length;
    while (i--) if (n_arg3[i] == _) n_arg3[i] = args2.pop();
    return args2.length ? _toUndef(n_args1, args2, n_arg3) : _toUndef(n_args1, n_arg3);
}