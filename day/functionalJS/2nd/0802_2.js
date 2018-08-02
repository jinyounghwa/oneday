function L(str){
    var splitted = str.split('=>');
    return new Function(splitted[0], 'return (' + splitted[1] +');');
}


//익명함수와 문자열 화살표 함수
console.time('1');
var arr = Array(10000);
_.map(arr, function (v ,i) {
    return i * 2;
})
console.timeEnd('1');

console.time('2');
var arr = Array(10000);
_.map(arr, L('v, i=> i*2'));
console.timeEnd('2');