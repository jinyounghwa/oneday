// this 는 사용되는 코드를 재사용하기 위함

this.valueA = 'a';

console.log(valueA);
valueB = 'b';
console.log(this.valueB);

function checkThis() {
    console.log(this);
}

function checkThis2() {
    "use strict";
    console.log(this);
}

checkThis();
checkThis2();

function Product(name, price) {
    this.name = name;
    this.price = price;
}
const Product1 = Product('가방', 20000);
console.log(window.name);
console.log(window.price);

const product2 = {
    name : '가방',
    price : 3000,
    getVAT(){
        return this.price / 10;
    }
}

const valueOfProduct2 = product2.getVAT();
console.log(valueOfProduct2);

const calVAT = product2.getVAT;
const VAT2 = calVAT();
console.log(VAT2);

const newCalVAT = calVAT.bind(product2);
const VAT3 = newCalVAT();
console.log(VAT3);

const conunter1 = {
    count : 0,
    addAfter1Sec(){
        setTimeout(function(){
            this.count += 1;
            console.log(this.count);
        }, 1000)
    }
}
conunter1.addAfter1Sec();

const conunter2 = {
    count : 0,
    addAfter1Sec(){
        setTimeout(function(){
            this.count += 1;
            console.log(this.count);
        }, 1000)
    }
}

conunter2.addAfter1Sec();