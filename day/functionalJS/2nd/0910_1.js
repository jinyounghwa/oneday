
var lodash_i = 0;

var result2 = lodash.chain(list).filter(function (num) {
    lodash_i++;
    return num %2 == 0;
}).take(5) // 이 값에 따라 위에서 5개가 모이면 루프를 멈추도록 한다.
    .value();

console.log(result2, lodash_i);