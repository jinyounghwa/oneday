// function Dog(name) {
//     this.name = name;
// }
// Dog.prototype.say = function() {
//     console.log(this.name + ' 멍멍');
// }
// var Dog = new Dog('검둥이');
// Dog.say();
// Es6

class Dog {
    constructor(name) {
        this.name = name;
    }
    say() {
        console.log(this.name + ' 멍멍');
    }
}
const dog = new Dog('흰둥이');
dog.say();//