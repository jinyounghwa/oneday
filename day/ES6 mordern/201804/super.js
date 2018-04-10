let person = {
    getGreeting(){
        return "Hello";
    }
};

//프로토타입은 person

let friend = {
    getGreeting(){
        return super.getGreeting() + "hi";
    }
};
Object.setPrototypeOf(friend, person);
//프로토타입은 friend

let relative = Object.create(friend);

console.log(person.getGreeting());
console.log(friend.getGreeting());
console.log(relative.getGreeting());

//뭘 상속했건 간에 super은 person.getGreeting()을 참조함
