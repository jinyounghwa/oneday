//bind(); 사용하지 않도록 외부 함수의 변수로 할당하는 방법 that,self

window.onload = function(){
    window.name = "window";

    var newObject = {
        name : "object",

        sayGreeting : function(){
            var self =this; // 이게 없으면 object 가 아닌 window참조
            alert("Now this is easy, " + this.name);
            nestdGreeting = function(greeting){
                alert(greeting + " " + self.name);
            };
            nestdGreeting("hello");
        }
    };
    newObject.sayGreeting("hello");
}