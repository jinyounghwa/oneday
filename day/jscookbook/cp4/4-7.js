//데이터와 함수를 초기화해서 다른 라이브러리와 충돌을 막고자 할 때

//객체 리터럴(일회성 객체)를 사용해 자바스크립트 형식의 네임스페이스 구현

var jscbObject = {
    //요소반환

    getElem : function(identifier) {
        return document.getElementById(identifier);
    },
    stripslashes : function(str){
        return str.replace(/\\/g,' ');
    },
    removeAngleVrackets : function(str){
        return str.replace(/</g, '&lt;').replace(/>/g,'&gt;');
    }
};

var sample = '<div>testing\changes</div>';

var result = jscbObject.stripslashes(sample);
result = jscbObject.removeAngleVrackets(result);

console.log(result);//&lt;div&gt;testingchanges&lt;/div&gt;