var doSomething = function doSomethingElse() {
    //...
}
var person = {
    get firstName(){
        return "Nicolas"
    },
    sayName: function(){
        console.log(this.name);
    }

}

console.log(doSomething.name);
console.log(person.sayName.name);

var descrptor = Object.getOwnPropertyDescriptor(person,"firstName");
console.log(descrptor.get.name);