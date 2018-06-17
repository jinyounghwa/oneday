 //super 참조를 통한 프로토타입 접근
let person = {
    getGreeting(){
        return "Hello";
    }
};

//프로토타입은 person

let friend = {
    getGreeting () {
        return super.getGreeting() + ",hi!!";
    }
};
Object.setPrototypeOf(friend, person);

//프로토타입은 friend

let relative = Object.create(friend);

console.log(person.getGreeting());
console.log(friend.getGreeting());
console.log(relative.getGreeting());