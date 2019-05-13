// 생성자 함수를 만드는 이유는 객체를 생성하는 용도이며 함수는 대문자로, 객체반환키워드는 new를 사용한다.

function Teacher(name, age, subject) {
    this.name = name;
    this.age = age;
    this.subject = subject;
    this.teach = function(student){
        console.log( student + '에게' + this.subject + ' 를 가르칩니다.')
    }
}

const jay = new Teacher('jay', 30, 'javascript');

console.log(jay);
jay.teach('bbo');

console.log(jay.constructor);
console.log(jay instanceof Teacher);

const jay2 = Teacher('jay', 30 , 'javascript');
console.log(jay2)
console.log(age);
