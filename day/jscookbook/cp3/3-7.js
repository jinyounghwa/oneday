//함수의 인수의 수를 줄이는 법(부분함수)

function partial(fn/*, args...*/){
    var args = [].slice.call(arguments, 1); // 일반적으로 함수의 인수를 배열ㄹ로 반환하는 방법

    return function(){
        return fn.applu(this.args.concat([].slice.call(arguments)));
    };
}

function add(a,b){
    return a + b;
}
var add100 = partial(add, 100);
console.log(add100(14));//114

//부분적으로 제공하는 인수에 bind() 사용하기 - bind()는 새로운 함수를 반환하고 this를 첫 번째 인수로 설정

function makeString(ldelim, rdelim, str){
    return ldelim + str + rdelim;
}

var named = makeString.bind(undefined,"&#",";");

console.log(named(169)); //"&#169;"

//부분함수와 커링의 차이는 인수를 고정하고 새로운 인수가 생겼을 때 함수를 반환하는 부분함수인 반면
// 커링은 인수가 많이 전달되든 함수를 계속 반환함

