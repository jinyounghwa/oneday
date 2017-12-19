// 겍체에 어떠한 변화도 생기지 않게 Object.freeze() 사용

'use strict';

var test = {
    value1 : 'one',
    value2 : function () {
        return this.value1;
    }
}

try{
    //객체 동결하기
    Object.freeze(test);

    //스트릭트 모드에서 다음은 오류 발생
    test.value2 = 'two';

    //다음도 오류 발생
    test.newProperty = 'value';

    var val = 'test';

    //디음도 오류 발생
    Object.defineProperties(test,'category', {
        get : function() {return test;},
        set : function(value){test = value;},
        enumerable:true,
        configurable:true
    });
}catch(e){
    console.log(e);
}