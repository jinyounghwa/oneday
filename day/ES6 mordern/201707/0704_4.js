//데이터와 함께 작업 실행하기

function run(taskDef) {
    //이터레이터를 만들고 어디서나 이용가능하도록 한다.

    let task = taskDef();

    //작업을 실행한다.
    let result = task.next();

    // next()를 호출하는 재귀함수
    function step(){
        //더 작업할 부분이 있을경우
        if(!result.done){
            result = task.next(result.value);
            step();
        }
    }
    //위 과정을 시작
    step();
}

run(function *(){
    let value = yield 1;
    console.log(value);

    value = yield value + 3;
    console.log(value);
});