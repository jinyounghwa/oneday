//다른 사람이 객체를 확장하지 못하도록 방지함

var Test = {
    value1 : "one",
    value2 : function() {
        return this.value1;
    }
};
try {
    Object.preventExtensions(Test);

    //다음은 실패함 타입에러 발생
    Test.value3 = "test";
}catch(e) {
    console.log(e);
}