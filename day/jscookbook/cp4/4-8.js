// 싱글톤 패턴은 오직 하나의 인스턴스만 생성 할 수 있다. 리터럴과는 큰 차이가 있다. 
//싱글톤은 정적인 요소로 존재하기 보다는 특정 시점에 인스턴스 화 된다.

var mySingleton = (function (){
    // 인스턴스가 싱글톤 참조를 저장

    var instance;
    function init(){
        //싱글톤

        //비공개 매서드와 변소
        function privateMethod(){
            console.log("I am private");
        }
        var privateVariable = "Im also private";

        var privateRandomNumber = Math.random();
        
        return {
            //공개 매서드와 변수

            publicMethod : function() {
                console.log("The public can see me!");
            },
            publicProperty : "I am also public",

            getRandomNumber:function(){
                return privateRandomNumber;
            }
        }
    }
    return {
        //싱글톤 인스턴스를 구하거나, 없으면 새로 만들기

        getInstance:function(){
            if(!instance) {
                instance = init();
            }
            return instance;
        }
    };
})();
singelA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log(singelA.getRandomNumber() === singleB.getRandomNumber());