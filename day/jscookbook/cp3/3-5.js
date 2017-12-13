// 함수의 인수에 Array기능을 사용하고 arguments집합을 배열로 반환하고 싶다.

function sumRounds(){
    var args = [].slice.call(arguments);

    return args.reduce(function(val1, val2){
        return parseInt(val1, 10) + parseInt(val2,10);
    });
}

var sum = sumRounds("2.3",4,5,"16",18.1);
console.log(sum); //45