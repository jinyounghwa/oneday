  var fibonacci = _.memoize(function(n){
        return n < 2 ? n:fibonacci(n-1) + fibonacci(n-2);
    });
    console.log(fibonacci(10));
    
    //다차원 배열 평평하게 만들기

    var ary = _.flatten([1,['apple'],[3,[['peach']]]]);
    console.log(ary);

    //블랙리스트 키의 배열에 따라 객체 걸러내기

    var fltobj = _.omit({name:'moe',age:50,userid:'moe1'},'userid');

    console.log(fltobj);

    //문자열을 이스케이프 하여 html에 삽입
    var str = _.escape("<div>This & that and 'the other'</div>");

    console.log(str);