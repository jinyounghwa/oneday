//주어진 함수의 유효범위를 제어하고 자 할 때 bind() 사용

window.onload = function(){
    window.name = "window";

    var newObject = {
        name : "object",

        sayGreeting : function(){
            alert("Now this is easy, " + this.name);
            nestedGreeting = function(greeting){
                alert(greeting + " " + this.name);
            }.bind(this);

            nestedGreeting("hello");
        }
    };
    newObject.sayGreeting("hello");
};