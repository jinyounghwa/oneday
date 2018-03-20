let pageHandler = {
    id:"123456",

    init : function(){
        document.addEventListener("click",(function(event){
            this.doSomething(event.type);//에러가 발생하지 않음
        }).bind(this),false);
    },
    doSomething : function(type){
        console.log("Handling" + type + "for " + this.id);
    }
};