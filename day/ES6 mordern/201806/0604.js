// 객체 리터럴의 문법확장 4.2

function createrPerson(name, age){
    return {
        name,
        age
    };
}

//간결한 매서드

var person = {
    name:"Nicholas",
    sayName(){
        console.log(this.name);
    }
}

//계산된 프로퍼티 이름
let lastName = "lastName";
let Person = {
    "firstname": "Nicholas",
    [lastName]:"Zakas"
};

console.log(Person["firstname"]);
console.log(Person[lastName]);