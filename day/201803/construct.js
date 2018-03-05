//ES5 에서 함수호출

function Person(name) {
    if(this instanceof Person) {
        this.name = name; // new 를 사용하여 호출한경우
    } else {
        throw new Error("You must use new with Person");
    }
}

var person = new Person("Nicholas");
var notPerson = Person.call(person,"Michael");

