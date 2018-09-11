var list = _.range(50);


//underscore.js
var _i = 0;

var result1 = _.chain(list)
                .filter(function (num) {
                    _i++;
                    return num % 2 == 0;
                }).take(5).value();
console.log(result1, _i);
