// 메모제이션(이미 계산된 값을 다시 계산하는 작업)

//메모제이션 적용
var fibonacci = function() {
    var memo = [0,1];

    var fib = function(n){
        var result = memo[n];

        if(typeof result !="number") {
            result = fib(n-1) + fib(n-2);
            memo[n] = result;
        }
        return result;
    };
    return fib;
}();

//메모제이션 적용하지 않음

var fib = function(n){
    return n < 2 ? n:fib(n-1) + fib(n-2);
};

//메모제이션이 적용되지 않은 함수를 타이머와 같이 실행
console.log("non-memo");
for(var i=0;i<=10;i++){
    console.log(i+" "+fib(i));
}
console.timeEnd("non-memo");

//메모제이션이 적용된 함수를 타이머와 같이 실행
console.log("memo");
for(var i=0; i<=10;i++){
    console.log(i+""+fibonacci(i));
}
console.timeEnd("memo");